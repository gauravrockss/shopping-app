'use client';

import { useQuery } from '@tanstack/react-query';
import queryKeys from '../queryKeys';
// import { getProfile } from './server';
import { apiClient } from '../config';
// import { apiClient } from '../config';

export function useProfile() {
    return useQuery({
        queryKey: [queryKeys.users + '/profile'],
        queryFn: () => apiClient('/users/profile'),
    });
}
