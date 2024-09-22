import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import Layout from './layout';
import { CssBaseline } from '@mui/material';

export default function App(props) {
    const { Component, pageProps } = props;

    return (
        <>
            <CssBaseline />
            <Layout>
                <AppCacheProvider {...props}>
                    <Component {...pageProps} />
                </AppCacheProvider>
            </Layout>
        </>
    );
}
