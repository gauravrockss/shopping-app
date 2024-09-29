import React from 'react';
import { Box, Button, Card, Grid2, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import login from '/public/images/signUp.jpg';

const SignUp = () => {
    return (
        <Box
            sx={{
                my: 5,
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
                        <Grid2 size={{ lg: 5, xs: 12 }}>
                            <Box
                                sx={{
                                    padding: { xs: '70px', xl: '130px' },
                                    textAlign: 'center',
                                }}>
                                <Typography
                                    variant='h5'
                                    fontWeight='bold'
                                    sx={{ marginBottom: 3 }}>
                                    Create your account
                                </Typography>
                                <Box
                                    sx={{
                                        fontSize: '15px',
                                    }}>
                                    <Typography
                                        color='text.secondary'
                                        sx={{ fontSize: '14px' }}>
                                        Start your journey and manage your tasks
                                        effortlessly with real-time updates.
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
                                            width={30}
                                            height={30}
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
                                        placeholder='Full Name'
                                        type='text'
                                    />
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Email'
                                        type='email'
                                    />
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Phone Number'
                                        type='number'
                                    />
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Password'
                                        type='password'
                                    />
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Confirm password'
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
                                        Sign Up
                                    </Button>
                                </form>

                                <Box sx={{ my: 4 }}>
                                    <Typography
                                        color='text.secondary'
                                        fontWeight='bold'>
                                        Already have an account?{' '}
                                        <Link href='/login'>Sign in</Link>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{ fontSize: '12px' }}
                                        color='text.secondary'>
                                        By signing up, you agree to our Terms
                                        and Privacy Policy.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2
                            size={{ lg: 7 }}
                            sx={{ display: { lg: 'flex', xs: 'none' } }}>
                            <Image
                                src={login}
                                alt='Banner Image'
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

export default SignUp;
