import React, { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance, { setAuthToken, api } from './axiosInstance'; // Assuming this is your axios config

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function to refresh token
  const refreshToken = async () => {
    try {
      const refreshToken = sessionStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token');

      const response = await api.post('/token/refresh', { refreshToken });
      const { accessToken, newRefreshToken } = response.data;

      sessionStorage.setItem('authToken', accessToken);
      sessionStorage.setItem('refreshToken', newRefreshToken);
      setAuthToken(accessToken);
      
      return accessToken;
    } catch (error) {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('refreshToken');
      setIsAuthenticated(false);
      throw error;
    }
  };

  // Set up axios response interceptor for token refresh
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // If error is 401 and we haven't tried to refresh token yet
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await refreshToken();
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = sessionStorage.getItem('authToken');
        if (!token) throw new Error('No token');

        await api.verifyToken();
        setIsAuthenticated(true);
      } catch (error) {
        try {
          await refreshToken();
          setIsAuthenticated(true);
        } catch (refreshError) {
          setIsAuthenticated(false);
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.login(credentials);
      const { accessToken, refreshToken } = response.data;

      sessionStorage.setItem('authToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
      setAuthToken(accessToken);
      setIsAuthenticated(true);

      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.logout();
    } finally {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('refreshToken');
      setAuthToken(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        isLoading, 
        login, 
        logout,
        refreshToken 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Example usage component
function ExampleAuthComponent() {
  const { isAuthenticated, isLoading, login, logout } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login({
        username: 'user@example.com',
        password: 'password123'
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        Status: {isAuthenticated ? 'Authenticated' : 'Not authenticated'}
      </div>
      {!isAuthenticated ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
}

// Root component
function App() {
  return (
    <AuthProvider>
      <ExampleAuthComponent />
    </AuthProvider>
  );
}
