'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardMedia, Typography } from '@mui/material';

const ExploreBlogs = () => {
    const items = [
        { imageUrl: 'blog1.webp' },
        { imageUrl: 'blog2.jpg' },
        { imageUrl: 'blog3.webp' },
        { imageUrl: 'blog4.webp' },
        { imageUrl: 'blog5.webp' },
        { imageUrl: 'blog6.webp' },
        { imageUrl: 'blog7.webp' },
        { imageUrl: 'blog8.webp' },
        { imageUrl: 'blog9.webp' },
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
            items: 2,
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
                <CommunityCard key={i} item={item} />
            ))}
        </Carousel>
    );
};

// Community card component to display only the image
const CommunityCard = ({ item }) => {
    return (
        <Card style={{ margin: '10px' }} elevation={0}>
            <CardMedia
                component='img'
                image={`/images/blogs/${item.imageUrl}`} // Ensure this image path is correct
                alt='Product Image'
                width={540} // Adjust as necessary
                height={400} // Adjust as necessary
                style={{ borderRadius: '20px' }} // Optional styling
            />
            <Typography variant='caption' color='text.tertiary'>
                May 10, 2024
            </Typography>
            <Typography color='text.seconadry' fontWeight='bold'>
                Empowering Women Through Fashion: The Rise of Motivational Quotes T-Shirts
            </Typography>
        </Card>
    );
};

export default ExploreBlogs;
