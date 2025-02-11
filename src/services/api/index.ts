import localStorageUtil from '@/utils/localStorage';
import axios from 'axios';
import authService from './authService';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

let isRefreshing = false;
let refreshQueue: ((token: string) => void)[] = [];

api.interceptors.request.use(
    (config) => {
        const tokenAuthorization = localStorageUtil.get<string>('accessToken');
        if (tokenAuthorization) {
            config.headers = config.headers || {};
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${tokenAuthorization}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            const refreshToken = localStorageUtil.get<string>('refreshToken');

            if (!refreshToken) {
                window.location.href = '/';
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise((resolve) => {
                    refreshQueue.push((token) => {
                        originalRequest.headers[
                            'Authorization'
                        ] = `Bearer ${token}`;
                        resolve(api(originalRequest));
                    });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const data = await authService.refreshToken(refreshToken);
                localStorageUtil.set('accessToken', data.accessToken);

                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${data.accessToken}`;

                refreshQueue.forEach((callback) => callback(data.accessToken));
                refreshQueue = [];

                return api(originalRequest);
            } catch (refreshError) {
                console.error('Erro ao renovar o token', refreshError);
                localStorageUtil.remove('accessToken');
                localStorageUtil.remove('refreshToken');
                window.location.href = '/';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    },
);

export default api;
