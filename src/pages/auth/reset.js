import React from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Watch password to compare it with confirm password
    const newPassword = watch('newPassword');

    const onSubmit = data => {
        console.log('Password reset:', data);
        // making an API call
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
                            <Typography variant='h5' fontWeight='bold'>
                                Create a new Password
                            </Typography>
                            <Box
                                sx={{
                                    fontSize: '15px',
                                    my: 3,
                                }}>
                                <Typography color='text.tertiary' sx={{ fontSize: '14px' }}>
                                    Guard your digital gate with a strong password: a mix of characters, length, and uniqueness.
                                </Typography>
                            </Box>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='New password'
                                    type='password'
                                    {...register('newPassword', {
                                        required: 'New password is required',
                                        // minLength: {
                                        //     value: 6,
                                        //     message:
                                        //         'Password must be at least 6 characters',
                                        // },
                                    })}
                                    error={!!errors.newPassword}
                                    helperText={errors.newPassword?.message}
                                />
                                <TextField
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Confirm password'
                                    type='password'
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: value => value === newPassword || 'Password do not match',
                                    })}
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword?.message}
                                />

                                <Button
                                    href='/auth/login'
                                    type='submit'
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        textTransform: 'capitalize',
                                    }}
                                    variant='contained'
                                    color='primary'>
                                    Reset password
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
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default ResetPassword;
