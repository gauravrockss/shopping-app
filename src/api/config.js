import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export async function apiClient(endpoint, requestOptions, otherOptions) {
    try {
        const res = await axios({
            baseURL: otherOptions?.baseUrl || baseUrl,
            url: endpoint,
            withCredentials: true,
            method: 'GET',
            ...(requestOptions || {}),
            headers: {
                'Content-Type': 'application/json',
                ...(requestOptions?.headers || {}),
            },
        });

        return res.data;
    } catch (e) {
        return null;
    }
}

export function getQueryClientForServer() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
}
