import { NextResponse } from 'next/server';
import { getSessionCookie } from './actions/auth';

const authPath = ['/auth/login', '/auth/register', '/auth/reset', '/auth/identify'];

export default async function middleware(request) {
    const { pathname } = request.nextUrl;
    const sessionCookie = await getSessionCookie();
    console.log('Middleware ', pathname);

    if (sessionCookie) {
        if (authPath.includes(pathname)) return NextResponse.redirect(new URL('/', request.nextUrl));

        return NextResponse.next();
    } else {
        if (!authPath.includes(pathname)) return NextResponse.redirect(new URL('/auth/login', request.nextUrl));

        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/', '/auth(.*)', '/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
