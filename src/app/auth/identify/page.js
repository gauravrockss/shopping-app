'use client';

import React, { useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Mail from '/public/images/mailSend.jpeg';

const Identify = () => {
    const [emailSent, setEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log('Reset password email sent to:', data.email);
        // Add logic to send password reset email
        setEmailSent(true); // Simulate successful email sending
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
                        {emailSent ? (
                            <Box
                                sx={{
                                    padding: '40px',
                                    textAlign: 'center',
                                }}>
                                <Typography variant='h5' fontWeight='bold' sx={{ marginBottom: 3 }}>
                                    Email Sent!
                                </Typography>
                                <Typography color='text.tertiary' sx={{ fontSize: '15px' }}>
                                    We&apos;ve sent a password reset link to your email. Follow the link to reset your password.
                                </Typography>
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
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    padding: '40px',
                                    textAlign: 'center',
                                }}>
                                <Typography variant='h5' fontWeight='bold'>
                                    Reset Password
                                </Typography>
                                <Box
                                    sx={{
                                        fontSize: '15px',
                                        my: 3,
                                    }}>
                                    <Typography color='text.tertiary' sx={{ fontSize: '14px' }}>
                                        Please enter your email address and we will send you a link to get back into your account.
                                    </Typography>
                                </Box>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        margin='dense'
                                        fullWidth
                                        placeholder='Email'
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: 'Invalid email format',
                                            },
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
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
                                        Send
                                    </Button>
                                </form>

                                <Box sx={{ my: 4 }}>
                                    <Typography color='text.secondary' fontWeight='bold'>
                                        Already have an account? <Link href='/auth/login'>Sign in</Link>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px' }} color='text.tertiary'>
                                        By using this website, you are hereby accepting the terms and conditions stipulated within the Privacy Policy
                                        Agreement.
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Identify;
