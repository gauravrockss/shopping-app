import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

export function getSessionCookie(request) {
    if (request) {
        return request.cookies.get('jwt-auth.access-token')?.value;
    }

    return getCookie('jwt-auth.access-token');
}

export function getSessionUser(request) {
    const sessionCookie = getSessionCookie(request);
    if (!sessionCookie) return null;
    return jwtDecode(sessionCookie);
}

export function logout() {
    deleteCookie('jwt-auth.access-token');
    deleteCookie('jwt-auth.refresh-token');
}
