'use server';

import { getSessionCookie } from '@/actions/auth';
import { apiClient } from '../config';
import queryKeys from '../queryKeys';

export async function getProfile() {
    const sessionCookie = await getSessionCookie();
    return apiClient(`/users/profile`, { headers: { Authorization: sessionCookie } });
}

export async function prefetchProfile(queryClient) {
    return queryClient.prefetchQuery({
        queryKey: [queryKeys.users + '/profile'],
        queryFn: getProfile,
    });
}
