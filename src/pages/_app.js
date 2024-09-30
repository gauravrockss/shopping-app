import { useRouter } from 'next/router';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import Layout from './layout';
import ThemeProvider from '@/theme';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import Provider from '@/providers/Provider';

export default function App(props) {
    const { Component, pageProps } = props;
    const router = useRouter();

    // Define the routes where you don't want to show the Navbar and Footer
    const noNavbarRoutes = ['/auth/login', '/auth/signup', '/auth/identify', '/auth/newPassword', '/404'];

    // Check if the current route should display Navbar and Footer
    const isNavbarVisible = !noNavbarRoutes.includes(router.pathname);

    return (
        <Provider>
            {isNavbarVisible ? (
                <Layout>
                    <Navbar />
                    <AppCacheProvider {...props}>
                        <Component {...pageProps} />
                    </AppCacheProvider>
                    <Footer />
                </Layout>
            ) : (
                <AppCacheProvider {...props}>
                    <Component {...pageProps} />
                </AppCacheProvider> // No Navbar/Footer for login/signup
            )}
        </Provider>
    );
}
