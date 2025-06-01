
// utils/axiosInstance.js
import axios from 'axios';

export const base_URL = process.env.NEXT_PUBLIC_BASE_URL+"/quiz/api/v1";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL+"/quiz/api/v1",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// export const refreshToken = async () => {
//     const refreshTokenValue = sessionStorage.getItem('refreshToken');
//     if (!refreshTokenValue) {
//         throw new Error('No refresh token available');
//     }

//     try {
//         const response = await axios.post(`${base_URL}/token/refresh/`, {
//             "refresh": refreshTokenValue
//         });
//         const { access } = response.data;
//         setAuthToken(access);
//         return access;
//     } catch (error) {
//         sessionStorage.removeItem('authToken');
//         sessionStorage.removeItem('refreshToken');
//         // window.location.href = '/login';
//         throw error;
//     }
// };

export const setAuthToken = (token) => {
    if (token) {
        sessionStorage.setItem('authToken', token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        sessionStorage.removeItem('authToken');
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

axiosInstance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // const newToken = await refreshToken();
                // originalRequest.headers.Authorization = `Bearer ${newToken}`;
                // return axiosInstance(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

