import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log('Form Data Submitted:', data);
        // Add logic to handle form submission here
    };

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
                    elevation={0}
                    sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        width: '100%',
                        maxWidth: {
                            xs: '100%',
                            sm: '500px',
                        },
                    }}>
                    <CardContent>
                        <Box
                            sx={{
                                padding: '40px',
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
                                    color='text.tertiary'
                                    sx={{ fontSize: '14px' }}>
                                    Unlock insights and track leads effortlessly
                                    with real-time monitoring, right at your
                                    fingertips
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
                                        width={25}
                                        height={25}
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

                            {/* Form starts here */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email format',
                                        },
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Email'
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                                <TextField
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Password'
                                    type='password'
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                                <Typography variant='body2'>
                                    <Link
                                        style={{
                                            float: 'right',
                                            textDecoration: 'none',
                                            color: '#0472D2',
                                            cursor: 'pointer',
                                            fontSize: 13,
                                        }}
                                        href={'/auth/identify'}>
                                        Forget password?
                                    </Link>
                                </Typography>
                                <Button
                                    type='submit'
                                    fullWidth
                                    sx={{
                                        mt: 1.5,
                                        textTransform: 'capitalize',
                                    }}
                                    variant='contained'
                                    color='primary'>
                                    Sign In
                                </Button>
                            </form>
                            {/* Form ends here */}

                            <Box sx={{ my: 4 }}>
                                <Typography fontWeight='bold'>
                                    Don't have an account ?{' '}
                                    <Link href='/auth/signup'>Sign up</Link>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontSize: '12px' }}
                                    color='text.tertiary'>
                                    By using this website, you are hereby
                                    accepting the terms and conditions
                                    stipulated within the Privacy Policy
                                    Agreement.
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
