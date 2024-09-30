import React, { createContext, useCallback, useContext } from 'react';
import useSnack from '@/hooks/useSnack';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/theme/createEmotionCache';
import ThemeProvider from '@/theme';
import '@/libs/axios';

const HeaderContext = createContext({ showMessage: () => {} });

const clientSideEmotionCache = createEmotionCache();

const Provider = ({ children }) => {
    const { SnackBar, showMessage } = useSnack();

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider>
                <HeaderContext.Provider value={{ showMessage }}>
                    {children}
                    {SnackBar}
                </HeaderContext.Provider>
            </ThemeProvider>
        </CacheProvider>
    );
};

const useMessage = () => {
    const showMessage = useContext(HeaderContext).showMessage;

    const showSuccess = useCallback(
        function (msg) {
            showMessage({ success: msg });
        },
        [showMessage]
    );

    const showError = useCallback(
        function (msg) {
            Array.isArray(msg) ? msg.forEach(msg => showMessage({ error: msg })) : showMessage({ error: msg });
        },
        [showMessage]
    );

    const showResponse = useCallback(
        function (msg) {
            showMessage({ response: msg });
        },
        [showMessage]
    );

    return { showError, showSuccess, showResponse };
};

export default Provider;

export { useMessage, HeaderContext };
