import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function App(props) {
    const { Component, pageProps } = props;

    return (
        <AppCacheProvider {...props}>
            <Component {...pageProps} />;
        </AppCacheProvider>
    );
}
