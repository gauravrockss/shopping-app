import { Box, Container, Divider, Grid2, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
    return (
        <Container>
            <Box sx={{ alignItems: 'center', my: 10 }}>
                <Box mt={5}>
                    <Typography fontWeight='bold'>Account</Typography>
                    <Typography variant='caption' color='text.secondary'>
                        Gaurav Gupta
                    </Typography>
                </Box>
                <Divider sx={{ mt: 1 }} />
                <Grid2 container spacing={2}>
                    <Grid2
                        size={{ md: 3, lg: 2 }}
                        sx={{
                            borderRight: '2px solid',
                            borderColor: 'divider',
                        }}>
                        <Box p={3} pl={0}>
                            <Typography color='text.secondary' variant='body2'>
                                Overview
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box p={2} pl={0}>
                            <Typography
                                color='text.tertiary'
                                variant='body2'
                                sx={{ mb: 2 }}>
                                ORDERS
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Orders & Return
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box p={2} pl={0}>
                            <Typography
                                color='text.tertiary'
                                variant='body2'
                                sx={{ mb: 2 }}>
                                CREDITS
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Coupons
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Credit
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box p={2} pl={0}>
                            <Typography
                                variant='body2'
                                color='text.tertiary'
                                sx={{ mb: 2 }}>
                                ACCOUNT
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Profile
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Saved Cards
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Saved VPA
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Addresses
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Delete Account
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Saved UPI
                            </Typography>
                        </Box>
                        <Divider sx={{ my: 1 }} />
                        <Box p={2} pl={0}>
                            <Typography
                                color='text.tertiary'
                                variant='body2'
                                sx={{ mb: 2 }}>
                                LEGAL
                            </Typography>
                            <Typography
                                variant='body2'
                                color='text.secondary'
                                gutterBottom>
                                Terms of Use
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    );
};

export default Dashboard;
