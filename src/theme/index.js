import { createTheme } from '@mui/material';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

const ThemeProvider = props => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#242F66',
            },
            background: {
                main: '#F6F6F8',
            },
            text: {
                primary: '#1B1B1B',
                secondary: '#51545E',
                tertiary: '#7C7F85',
                green: '#008C2D', // Default text color
            },
            white: {
                light: '#ebeff81c',
                dark: '#fff',
            },
            blue: {
                light: '#274bf41c',
                dark: '#274BF4',
            },
            lightGreen: {
                light: '#1eac911c',
                dark: '#1EAC91',
            },
            pink: {
                light: '#ef4eb81c',
                dark: '#EF4EB8',
            },
            orange: {
                light: '#f349331c',
                dark: '#F34933',
            },
            skyBlue: {
                light: '#128af41c',
                dark: '#128AF4',
            },
            red: {
                light: '#f727491c',
                dark: '#F72749',
            },
            yellow: {
                dark: '#FE7F00',
                light: '#fe7f001c',
            },
            linkColor: '#0476D3',
        },

        components: {
            MuiCssBaseline: {
                styleOverrides: theme => ({
                    body: {
                        scrollBehavior: 'smooth',
                        'input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button':
                            {
                                WebkitAppearance: 'none',
                                margin: '0',
                            },

                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            backgroundColor: 'transparent',
                            width: '4px',
                            height: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb':
                            {
                                borderRadius: 8,
                                backgroundColor: theme.palette.divider,
                                // backgroundColor: 'red',
                            },
                        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner':
                            {
                                backgroundColor: 'inherit',
                            },
                        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
                            {
                                backgroundColor: '#747775',
                            },

                        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
                            {
                                backgroundColor: '#747775',
                            },
                        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
                            {
                                backgroundColor: '#747775',
                            },
                    },
                }),
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
