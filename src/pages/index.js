import React from 'react';

import {
    Box,
    Button,
    Grid2,
    IconButton,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Hero from '@/components/Hero';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import CardCompoent from '@/components/CardComponent';
import { men, storydata } from '@/data/men';
import Container from '@/components/Container';
import LatestProduct from '@/components/products/Latest';
import BestSellers from '@/components/products/BestSellers';
import Community from '@/components/Community';
import ExploreBlogs from '@/components/Blogs';

// images
import HoodieFeatures from '/public/images/hoodies/features1.webp';
import banner from '/public/images/banner1.webp';
import person1 from '/public/images/story1.webp';
import person2 from '/public/images/story2.webp';
import person3 from '/public/images/story3.webp';

export default function Home() {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));
    return (
        <>
            <Container sx={{ my: 5 }}>
                <Hero />
                {/* popular section */}
                <Box mt={3} textAlign='center'>
                    <Typography
                        variant='h5'
                        fontWeight='bold'
                        color='text.secondary'>
                        Most Popular
                    </Typography>
                    <Box
                        mt={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Typography variant='body1'>Check Out Now</Typography>
                        <IconButton>
                            <ArrowForwardIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </Box>

                <Box my={5}>
                    <Grid2
                        container
                        spacing={2}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <CardCompoent
                            title=' Classic T-shirt'
                            image='card1.webp'
                        />
                        <CardCompoent
                            title=' Oversized T-shirt'
                            image='card2.webp'
                        />
                        <CardCompoent
                            title=' Fashion joggers'
                            image='card3.webp'
                            arrow={true}
                        />
                        <CardCompoent
                            title=' Airport Co-Ords'
                            image='card4.webp'
                            arrow={true}
                        />
                    </Grid2>
                </Box>

                {/* Shop For Men */}
                <Box textAlign='center' my={8}>
                    <Typography
                        variant='h5'
                        fontWeight='bold'
                        color='text.secondary'>
                        Shop For Men
                    </Typography>
                    <Grid2
                        container
                        spacing={2}
                        mt={5}
                        rowSpacing={3}
                        display='flex'
                        alignItems='center'
                        sx={{ justifyContent: { lg: 'left', xs: 'center' } }}>
                        {men.map(item => (
                            <Grid2
                                size={{ xs: 12, sm: 6, md: 3, lg: 2 }}
                                key={item.title}>
                                <Image
                                    src={item.image}
                                    height='230'
                                    width='230'
                                    alt='image'
                                />
                                <Typography
                                    textTransform={'capitalize'}
                                    color='text.secondary'
                                    fontWeight='bold'>
                                    {item.title}
                                </Typography>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
            </Container>

            {/* our story  */}

            <Box
                my={5}
                sx={{
                    background: '#243064',
                    color: '#fff',
                }}>
                <Grid2 container display='flex' alignItems='stretch' p={0}>
                    {/* Left Section - Our Story */}
                    <Grid2 size={{ xs: 12, lg: 6 }} p={0}>
                        <Box
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            p={4}>
                            <Box maxWidth={800} mx={'auto'} p={2}>
                                <Typography variant='h4' fontWeight='bold'>
                                    Our Story
                                </Typography>
                                <Typography variant='h6' my={2}>
                                    We are a creative and innovative fashion
                                    brand dedicated to redefining style and
                                    empowering individuality. Our mission is to
                                    craft unique and stylish clothing that not
                                    only meets the ever-changing trends but also
                                    reflects the personal expression of each
                                    individual. We believe that fashion is more
                                    than just what you wear—it's a statement, a
                                    form of self-expression, and a way to stand
                                    out in the world.
                                </Typography>
                            </Box>
                            <Box
                                display='flex'
                                mt={5}
                                justifyContent='center'
                                p={2}>
                                {storydata.map(item => (
                                    <Box
                                        sx={{ mx: { lg: 4, xs: 2 } }}
                                        key={item.title}>
                                        <IconButton>{item.icon}</IconButton>
                                        <Typography
                                            my={2}
                                            color='text.tertiary'
                                            textTransform='capitalize'
                                            letterSpacing={1}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid2>

                    {/* Right Section - Images */}
                    <Grid2 size={{ xs: 12, lg: 6 }} p={0} display='flex'>
                        <Box position='relative' width='100%' display='flex'>
                            {/* Container for images */}
                            <Image
                                src={person1}
                                alt='Banner Image'
                                sizes='100vw'
                                style={{ width: '33.33%', height: 'auto' }}
                            />
                            <Image
                                src={person2}
                                alt='Banner Image'
                                sizes='100vw'
                                style={{ width: '33.33%', height: 'auto' }}
                            />

                            <Image
                                src={person3}
                                alt='Banner Image'
                                sizes='100vw'
                                style={{ width: '33.33%', height: 'auto' }}
                            />

                            {/* Bottom Strip with Text */}
                            <Box
                                position='absolute'
                                bottom={0}
                                width='100%'
                                sx={{
                                    background: '#243064',
                                    color: '#fff', // White text color
                                    textAlign: 'center',
                                    py: 1,
                                }}>
                                <Typography
                                    variant='h6'
                                    textTransform='uppercase'
                                    letterSpacing={'10px'}>
                                    Perfect for all occasions
                                </Typography>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

            {/* see the latest */}
            <Container my={8}>
                <Box my={5} textAlign='center'>
                    <Typography
                        variant='h5'
                        fontWeight='bold'
                        color='text.secondary'>
                        See the latest
                    </Typography>
                    <Box
                        mt={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Typography variant='body1'>
                            Handpicked for you
                        </Typography>
                    </Box>
                </Box>
                <Box mb={8}>
                    <LatestProduct />
                    <Box textAlign='center'>
                        <Button
                            variant='outlined'
                            sx={{
                                borderRadius: '30px',
                                px: 10,
                                mt: 3,
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                border: '2px solid ',
                            }}>
                            Shop All Products
                        </Button>
                    </Box>
                </Box>
            </Container>

            {/* banner */}

            <Image
                src={banner}
                alt='Banner Image'
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
            />

            {/* hoodies features */}
            <Box
                mb={8}
                backgroundColor='#E9EAF0'
                p={isSmallScreen ? 5 : 10}
                textAlign='center'>
                <Image
                    src={HoodieFeatures}
                    alt='Banner Image'
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                />
                <Box
                    mt={3}
                    display='flex'
                    flexDirection={isSmallScreen ? 'column' : 'row'}
                    justifyContent='center'>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '30px',
                            px: isSmallScreen ? 10 : 15,
                            py: 1,
                            mr: isSmallScreen ? 0 : 5,
                            mb: isSmallScreen ? 2 : 0,
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                        }}>
                        Explore More
                    </Button>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography
                                color='text.primary'
                                variant={isSmallScreen ? 'h6' : 'h5'}
                                fontWeight='bold'>
                                ₹ 5000.00
                            </Typography>
                            <Typography
                                color='green'
                                variant={isSmallScreen ? 'h6' : 'h5'}
                                fontWeight='bold'
                                ml={1}>
                                50% Off
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            <Typography
                                color='text.tertiary'
                                sx={{
                                    textDecoration: 'line-through',
                                    mx: '10px',
                                }}>
                                MRP ₹4,999.00
                            </Typography>
                            <Typography
                                variant='caption'
                                color='text.tertiary'
                                mt={0.2}>
                                Inclusive of all taxes
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Our Bestsellers */}
            <Container my={8}>
                <Box>
                    <Box my={5} textAlign='center'>
                        <Typography
                            variant='h5'
                            fontWeight='bold'
                            color='text.secondary'>
                            Our Bestsellers
                        </Typography>
                        <Box
                            mt={0.5}
                            display='flex'
                            alignItems='center'
                            color='text.tertiary'
                            justifyContent='center'>
                            <Typography variant='body1'>
                                Don't miss out Top Selling styles
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <BestSellers />
                        <Box textAlign='center'>
                            <Button
                                variant='outlined'
                                sx={{
                                    borderRadius: '30px',
                                    px: 10,
                                    mt: 3,
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    border: '2px solid ',
                                }}>
                                Shop All Products
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Join our 300k+ Nobero Community */}

                <Box my={8}>
                    <Box my={5} textAlign='center'>
                        <Typography
                            variant='h5'
                            fontWeight='bold'
                            color='text.secondary'>
                            Join our 300k+ Nobero Community
                        </Typography>
                        <Box
                            mt={0.5}
                            display='flex'
                            alignItems='center'
                            color='text.tertiary'
                            justifyContent='center'>
                            <Typography variant='body1'>
                                Ready, Jet-set, Go.
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Community />
                    </Box>
                </Box>

                {/* Explore Blogs */}

                <Box my={10}>
                    <Typography variant='h5' fontWeight='bold'>
                        Explore Blogs
                    </Typography>
                    <Box mt={1}>
                        <ExploreBlogs />
                    </Box>
                </Box>
            </Container>
        </>
    );
}
