'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '@/components/products/productCard';

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
                <ProductCard key={i} item={item} />
            ))}
        </Carousel>
    );
};

export default LatestProduct;
