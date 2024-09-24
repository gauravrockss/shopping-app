import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import Layout from './layout';
import ThemeContextProvider from '@/style/theme';

export default function App(props) {
    const { Component, pageProps } = props;

    return (
        <>
            <ThemeContextProvider>
                <Layout>
                    <AppCacheProvider {...props}>
                        <Component {...pageProps} />
                    </AppCacheProvider>
                </Layout>
            </ThemeContextProvider>
        </>
    );
}
