import { Typography, Box, Button } from '@mui/material';

import Mail from '/public/images/404.jpg';
import Image from 'next/image';

const Custom404 = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            maxWidth='800px'
            mx='auto'
            minHeight={'100vh'}>
            <Image
                src={Mail}
                alt='Banner Image'
                sizes='100vw'
                style={{
                    width: '100%',
                    height: 'auto',
                    marginTop: 5,
                }}
            />
            {/* 404 text message */}

            <Typography variant='h4' color='textSecondary'>
                Oops! The page you are looking for doesn’t exist.
            </Typography>
            <Button variant='outlined' href='/' sx={{ mt: 5 }}>
                Back to Home
            </Button>
        </Box>
    );
};

export default Custom404;
