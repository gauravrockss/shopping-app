import React, { useState } from 'react';
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

const SignUp = ({ onStepChange }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);

        // Send only email to backend for confirmation

        onStepChange(data);
    };

    return (
        <Box>
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
                                Create your account
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    {...register('fullName', {
                                        required: true,
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Full Name'
                                    type='text'
                                    error={!!errors.fullName}
                                    helperText={
                                        errors.fullName
                                            ? 'Full Name is required'
                                            : ''
                                    }
                                />
                                <TextField
                                    {...register('email', {
                                        required: true,
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
                                    helperText={
                                        errors.email ? 'Email is required' : ''
                                    }
                                />
                                <TextField
                                    {...register('password', {
                                        required: true,
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Password'
                                    type='password'
                                    error={!!errors.password}
                                    helperText={
                                        errors.password
                                            ? 'Password is required'
                                            : ''
                                    }
                                />
                                <TextField
                                    {...register('confirmPassword', {
                                        required: true,
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Confirm password'
                                    type='password'
                                    error={!!errors.confirmPassword}
                                    helperText={
                                        errors.confirmPassword
                                            ? 'Confirm password is required'
                                            : ''
                                    }
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
                                    <Link href='/auth/login'>Sign in</Link>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontSize: '12px' }}
                                    color='text.tertiary'>
                                    By signing up, you agree to our Terms and
                                    Privacy Policy.
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

const EmailConfirmation = ({ formData, onEmailConfirmed, setStep }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        // After confirming the email, send all the formData to backend
        const fullData = {
            ...formData,
            confirmationCode: data.confirmationCode,
        };
        onEmailConfirmed(fullData);
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
                                Email Confirmation
                            </Typography>{' '}
                            <Box
                                sx={{
                                    fontSize: '15px',
                                    my: 3,
                                }}>
                                <Typography
                                    color='text.tertiary'
                                    sx={{ fontSize: '14px' }}>
                                    Nobero wants to make sure that it's really
                                    you. Nobero will send an email with a
                                    six-digit confirmation code on your
                                </Typography>
                            </Box>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    {...register('confirmationCode', {
                                        required: true,
                                    })}
                                    variant='outlined'
                                    size='small'
                                    margin='dense'
                                    fullWidth
                                    placeholder='Email confirmation code'
                                    error={!!errors.confirmationCode}
                                    helperText={
                                        errors.confirmationCode
                                            ? 'Code is required'
                                            : ''
                                    }
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
                                    Confirm
                                </Button>
                                <Button
                                    onClick={() => {
                                        setStep(1);
                                    }}
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        textTransform: 'capitalize',
                                    }}
                                    variant='outlined'
                                    color='primary'>
                                    Back
                                </Button>
                            </form>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

const SignUpFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleStepChange = data => {
        setFormData(data);
        setStep(2);
    };

    const handleEmailConfirmed = fullData => {
        // Send the complete data (formData + confirmationCode) to the backend
        console.log('Data sent to backend:', fullData);
        // You can make your API request here
    };

    return (
        <>
            {step === 1 && <SignUp onStepChange={handleStepChange} />}
            {step === 2 && (
                <EmailConfirmation
                    formData={formData}
                    onEmailConfirmed={handleEmailConfirmed}
                    setStep={setStep}
                />
            )}
        </>
    );
};

export default SignUpFlow;
