// ProductGrid.jsx
import React from 'react';
import { Card, CardMedia, Typography, Box, Grid2 } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const BestSellers = () => {
    const items = [
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest1.webp',
            rating: 4.5,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest2.webp',
            rating: 4.0,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1300',
            imageUrl: 'latest3.webp',
            rating: 4.8,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1400',
            imageUrl: 'latest4.webp',
            rating: 4.3,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1500',
            imageUrl: 'latest5.webp',
            rating: 4.6,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest6.webp',
            rating: 4.1,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1300',
            imageUrl: 'latest7.jpg',
            rating: 4.7,
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1400',
            imageUrl: 'latest8.webp',
            rating: 4.9,
        },
    ];

    return (
        <Box sx={{ padding: 4 }}>
            <Grid2 container spacing={3}>
                {items.map((item, i) => (
                    <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }} key={i}>
                        <ProductCard item={item} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

// Product card component with discount, rating, and label
const ProductCard = ({ item }) => {
    const originalPrice = (parseFloat(item.price) / 0.43).toFixed(2);
    const discountPercentage = 57;

    return (
        <Card sx={{ margin: '10px', position: 'relative' }} elevation={0}>
            {/* Bestseller label at the top left */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: '#CDA942',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                }}>
                Bestseller
            </Box>

            {/* Rating at the bottom left */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '110px',
                    left: '10px',
                    backgroundColor: '#DFE1E3',
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <StarIcon sx={{ fontSize: '1rem', color: '#D8BA43' }} />
                <Typography variant='body2' ml={0.5}>
                    {item.rating} / 10
                </Typography>
            </Box>

            <CardMedia
                component='img'
                image={`/images/latest/${item.imageUrl}`}
                alt={item.name}
                width={540}
                height={507}
            />
            <Box mt={2}>
                <Typography fontWeight='bold' color='text.tertiary'>
                    {item.name}
                </Typography>
                <Box display='flex' alignItems='center' my={0.5}>
                    {/* Current price */}
                    <Typography color='text.tertiary' fontWeight='bold'>
                        ₹ {item.price}
                    </Typography>
                    {/* Original price with strikethrough */}
                    <Typography
                        color='text.tertiary'
                        sx={{
                            textDecoration: 'line-through',
                            mx: '10px',
                        }}>
                        ₹ {originalPrice}
                    </Typography>
                    {/* Discount percentage */}
                    <Typography color='green' fontWeight='bold'>
                        {discountPercentage}% Off
                    </Typography>
                </Box>
                {/* Additional information */}
                <Typography color='green' fontWeight='light'>
                    Lowest price in last 30 days
                </Typography>
            </Box>
        </Card>
    );
};

export default BestSellers;
