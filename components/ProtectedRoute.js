"use client"
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Ripple } from 'react-css-spinners';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyAuth = async () => {
            const token = sessionStorage.getItem('authToken');
            const refreshTokenValue = sessionStorage.getItem('refreshToken');
            

            if (!token && !refreshTokenValue) {
                window.location.href = '/login';
                return;
            }

            try {
                if (token) {
                    const response = await axiosInstance.post('/token/verify/', { "token":token });
                    setIsAuthenticated(true);
                } 
            } catch (error) {
              sessionStorage.removeItem('authToken');
              try {
                if (refreshTokenValue) {
                  const response = await axiosInstance.post(
                    '/token/refresh/', 
                    { "refresh": refreshTokenValue }
                  );
                  sessionStorage.setItem('authToken', response.data.access);
                  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
                  setIsAuthenticated(true);
                }
              } catch (refreshError) {
                sessionStorage.removeItem('authToken');
                sessionStorage.removeItem('refreshToken');
                delete axiosInstance.defaults.headers.common['Authorization'];
                window.location.href = '/login';
              }
            } finally {
                setLoading(false);
            }
        };

        verifyAuth();
    }, []);

    if (loading) {
        return (
            <div className="d-flex bg-transparent" style={{ height: '100vh' }}>
                <Ripple
                  color="rgba(162,145,247,1)"
                  size={115}
                  thickness={7}
                  className="mx-auto align-self-center"
                />
            </div>
        );
    }

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;