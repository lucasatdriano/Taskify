import localStorageUtil from '@/utils/localStorage';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const tokenAuthorization = localStorageUtil.get<string>('token');
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

export default api;
