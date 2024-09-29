import React from 'react';
import { Box, Button, Card, Grid2, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import login from '/public/images/signUp.jpg';

const Login = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                padding: { xs: 2, md: 4, lg: 3, xl: 0 },
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}>
                <Card
                    sx={{
                        width: '100%',
                        maxWidth: {
                            xs: '100%',
                            sm: '600px',
                            lg: '1200px',
                            xl: '1500px',
                        },
                    }}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ lg: 5 }}>
                            <Box
                                sx={{
                                    padding: { xs: '70px', xl: '130px' },
                                    textAlign: 'center',
                                }}>
                                <Typography
                                    variant='h5'
                                    fontWeight='bold'
                                    sx={{ marginBottom: 3 }}>
                                    Login to your account
                                </Typography>
                                <Box
                                    sx={{
                                        fontSize: '15px',
                                    }}>
                                    <Typography
                                        color='text.secondary'
                                        sx={{ fontSize: '14px' }}>
                                        Unlock insights and track leads
                                        effortlessly with real-time monitoring,
                                        right at your fingertips
                                    </Typography>

                                    <Button
                                        fullWidth
                                        sx={{
                                            mt: 3,
                                            background: '#fff',
                                            textTransform: 'capitalize',
                                        }}
                                        variant='outlined'
                                        color='primary'>
                                        <Image
                                            src='/images/google.png'
                                            alt='google'
                                            width='30'
                                            height='30'
                                            sx={{ height: 25, px: 1 }}
                                        />
                                        Sign up with Google
                                    </Button>
                                    <Box
                                        display='flex'
                                        alignItems='center'
                                        sx={{ my: 4 }}>
                                        <Box
                                            flexGrow={1}
                                            height='1px'
                                            bgcolor='grey.400'
                                        />
                                        <Typography variant='body1' mx={2}>
                                            or
                                        </Typography>
                                        <Box
                                            flexGrow={1}
                                            height='1px'
                                            bgcolor='grey.400'
                                        />
                                    </Box>
                                </Box>
                                <form>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Your email'
                                        type='email'
                                    />
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Your password'
                                        type='password'
                                    />
                                    <Button
                                        type='submit'
                                        fullWidth
                                        sx={{
                                            mt: 2,
                                            textTransform: 'capitalize',
                                        }}
                                        variant='contained'
                                        color='primary'>
                                        Sign In
                                    </Button>
                                </form>

                                <Box sx={{ my: 4 }}>
                                    <Typography
                                        color='text.secondary'
                                        fontWeight='bold'>
                                        Don't have an account ?{' '}
                                        <Link href='/signup'>Sign up</Link>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{ fontSize: '12px' }}
                                        color='text.secondary'>
                                        By using this website, you are hereby
                                        accepting the terms and conditions
                                        stipulated within the Privacy Policy
                                        Agreement.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2
                            size={{ lg: 7 }}
                            sx={{
                                display: { lg: 'flex', xs: 'none' },
                            }}>
                            <Image
                                src={login}
                                alt='Image'
                                sizes='100vw'
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Grid2>
                    </Grid2>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
