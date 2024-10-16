import { getQueryClientForServer } from '@/api/config';
import { prefetchProfile } from '@/api/profile/server';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Fragment } from 'react';

async function Layout({ children }) {
    const queryClient = getQueryClientForServer();
    await prefetchProfile(queryClient);
    return (
        <Fragment>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Header />
                {children}
                <Footer />
            </HydrationBoundary>
        </Fragment>
    );
}

export default Layout;
