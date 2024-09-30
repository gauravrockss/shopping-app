import { getSessionCookie } from '@/actions/auth';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
axios.defaults.withCredentials = true;

const authApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/auth',
});

authApi.interceptors.request.use(function (config) {
    config.headers.Authorization = process.env.NEXT_PUBLIC_API_KEY;
    return config;
});

axios.interceptors.request.use(async function (config) {
    const session = getSessionCookie();
    console.log('axios session:', session);
    config.headers.Authorization = session;
    return config;
});

export { authApi };
