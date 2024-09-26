import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const LatestProduct = () => {
    const items = [
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest1.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest2.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1300',
            imageUrl: 'latest3.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1400',
            imageUrl: 'latest4.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1500',
            imageUrl: 'latest5.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1200',
            imageUrl: 'latest6.webp',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1300',
            imageUrl: 'latest7.jpg',
        },
        {
            name: 'Oversized Fit Hoodie',
            price: '1400',
            imageUrl: 'latest8.webp',
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1440 }, // Adjusted for larger desktops (4 items)
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1440, min: 1024 }, // Adjusted for laptops (3 items)
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile']}>
            {items.map((item, i) => (
                <CarouselCard key={i} item={item} />
            ))}
        </Carousel>
    );
};

const CarouselCard = ({ item }) => {
    const originalPrice = (parseFloat(item.price) / 0.43).toFixed(2);
    const discountPercentage = 57;

    return (
        <Card style={{ margin: '10px' }} elevation={0}>
            <CardMedia
                component='img'
                image={`/images/latest/${item.imageUrl}`}
                alt='Classic T-shirt'
                width={540}
                height={507}
            />
            <CardContent>
                <Typography variant='h6'>{item.name}</Typography>
                <Box display='flex' alignItems='center' my={0.5}>
                    <Typography color='text.primary' fontWeight='bold'>
                        ₹ {item.price}
                    </Typography>
                    <Typography
                        color='text.secondary'
                        sx={{
                            textDecoration: 'line-through',
                            mx: '10px',
                        }}>
                        ₹ {originalPrice}
                    </Typography>
                    <Typography color='green' fontWeight='bold'>
                        {discountPercentage}% Off
                    </Typography>
                </Box>
                <Typography color='green' fontWeight='light'>
                    Lowest price in last 30 days
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LatestProduct;
