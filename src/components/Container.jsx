import Box from '@mui/material/Box';
import React from 'react';

const Container = ({ children, sx, ...rest }) => {
    return (
        <Box
            sx={{ width: 'min(1536px, 90%)', mx: 'auto', ...sx, mt: 5 }}
            {...rest}>
            {children}
        </Box>
    );
};

export default Container;
