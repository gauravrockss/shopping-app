import React from 'react';
import { Box, Grid2, Typography, IconButton } from '@mui/material';
import Container from '@/components/container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: '#fff', p: 9 }}>
            <Container>
                <Grid2 container spacing={4}>
                    {/* Categories Column */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                        <Typography fontWeight='bold' mb={2}>
                            Categories
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Men
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Women
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Classic Tees
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Oversized Tees
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Fashion Joggers
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Hoodies
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Travel Hoodie
                        </Typography>
                    </Grid2>

                    {/* Need Help Column */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                        <Typography fontWeight='bold' mb={2}>
                            Need Help
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Track Your Order
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Returns & Exchanges
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Chat on WhatsApp
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Contact Us
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            FAQs
                        </Typography>
                    </Grid2>

                    {/* Company Column */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                        <Typography fontWeight='bold' mb={2}>
                            Company
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Shipping Policy
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Privacy Policy
                        </Typography>
                        <Typography mb={1} variant='body2'>
                            Terms of Service
                        </Typography>
                    </Grid2>

                    {/* Get in Touch Column */}
                    <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                        <Typography fontWeight='bold' mb={2}>
                            Get in touch
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <IconButton color='inherit' href='https://wa.me/your_number' target='_blank' aria-label='WhatsApp'>
                                <WhatsAppIcon fontSize='large' />
                            </IconButton>
                            <IconButton color='inherit' href='https://instagram.com/your_profile' target='_blank' aria-label='Instagram'>
                                <InstagramIcon fontSize='large' />
                            </IconButton>
                            <IconButton color='inherit' href='https://facebook.com/your_profile' target='_blank' aria-label='Facebook'>
                                <FacebookIcon fontSize='large' />
                            </IconButton>
                        </Box>
                    </Grid2>
                </Grid2>
                {/* Copyright Section */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Typography variant='body2'>© 2023 NOBERO. All Rights Reserved by Pratyaya E-commerce Pvt. Ltd.</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
