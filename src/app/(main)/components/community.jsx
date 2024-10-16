'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardMedia } from '@mui/material';

const Community = () => {
    const items = [
        { imageUrl: 'story1.webp' },
        { imageUrl: 'story2.webp' },
        { imageUrl: 'story3.webp' },
        { imageUrl: 'story4.webp' },
        { imageUrl: 'story5.webp' },
        { imageUrl: 'story6.webp' },
        { imageUrl: 'story7.webp' },
        { imageUrl: 'story8.webp' },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1440 }, // 4 items for larger desktops
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1440, min: 1024 }, // 3 items for laptops
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
            removeArrowOnDeviceType={['tablet', 'mobile']} // Hide arrows on mobile and tablet
        >
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
                image={`/images/${item.imageUrl}`} // Ensure this image path is correct
                alt='Product Image'
                width={540} // Adjust as necessary
                height={507} // Adjust as necessary
                style={{ borderRadius: '10px' }} // Optional styling
            />
        </Card>
    );
};

export default Community;
