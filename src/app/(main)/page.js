import Container from '@/components/container';
import React from 'react';
import { Box, Button, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { men, storydata } from '@/data/home';
import Image from 'next/image';
import BestSellers from '@/components/products/bestSellers';
import CardCompoent from './components/cardComponent';
import ExploreBlogs from './components/blogs';
import LatestProduct from './components/latest';
import Community from './components/community';
import Hero from './components/hero';

// Images
import HoodieFeatures from '/public/images/hoodies/features1.webp';
import banner from '/public/images/banner1.webp';
import person1 from '/public/images/story1.webp';
import person2 from '/public/images/story2.webp';
import person3 from '/public/images/story3.webp';

const Page = async () => {
    return (
        <React.Fragment>
            <Container sx={{ my: 5 }}>
                <Hero />
                {/* popular section */}
                <Box mt={3} textAlign='center'>
                    <Typography variant='h5' fontWeight='bold' color='text.secondary'>
                        Most Popular
                    </Typography>
                    <Box mt={1} display='flex' alignItems='center' justifyContent='center'>
                        <Typography variant='body1'>Check Out Now</Typography>
                        <IconButton>
                            <ArrowForwardIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </Box>

                <Box my={5}>
                    <Grid container spacing={2} display='flex' alignItems='center' justifyContent='center'>
                        <CardCompoent title=' Classic T-shirt' image='card1.webp' />
                        <CardCompoent title=' Oversized T-shirt' image='card2.webp' />
                        <CardCompoent title=' Fashion joggers' image='card3.webp' arrow={true} />
                        <CardCompoent title=' Airport Co-Ords' image='card4.webp' arrow={true} />
                    </Grid>
                </Box>

                {/* Shop For Men */}
                <Box textAlign='center' my={8}>
                    <Typography variant='h5' fontWeight='bold' color='text.secondary'>
                        Shop For Men
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        mt={5}
                        rowSpacing={3}
                        display='flex'
                        alignItems='center'
                        sx={{ justifyContent: { lg: 'left', xs: 'center' } }}>
                        {men.map(item => (
                            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }} key={item.title}>
                                <Image src={item.image} height='230' width='230' alt='image' />
                                <Typography textTransform={'capitalize'} color='text.secondary' fontWeight='bold'>
                                    {item.title}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* our story  */}
            <Box
                my={5}
                sx={{
                    background: '#243064',
                    color: '#fff',
                }}>
                <Grid container display='flex' alignItems='stretch' p={0}>
                    {/* Left Section - Our Story */}
                    <Grid size={{ xs: 12, lg: 6 }} p={0}>
                        <Box textAlign='center' display='flex' flexDirection='column' justifyContent='center' p={4}>
                            <Box maxWidth={800} mx={'auto'} p={2}>
                                <Typography variant='h4' fontWeight='bold'>
                                    Our Story
                                </Typography>
                                <Typography variant='h6' my={2}>
                                    We are a creative and innovative fashion brand dedicated to redefining style and empowering individuality. Our
                                    mission is to craft unique and stylish clothing that not only meets the ever-changing trends but also reflects the
                                    personal expression of each individual. We believe that fashion is more than just what you wear—it&apos;s a
                                    statement, a form of self-expression, and a way to stand out in the world.
                                </Typography>
                            </Box>
                            <Box display='flex' mt={5} justifyContent='center' p={2}>
                                {storydata.map(item => (
                                    <Box sx={{ mx: { lg: 4, xs: 2 } }} key={item.title}>
                                        <IconButton>{item.icon}</IconButton>
                                        <Typography my={2} color='text.tertiary' textTransform='capitalize' letterSpacing={1}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Section - Images */}
                    <Grid size={{ xs: 12, lg: 6 }} p={0} display='flex'>
                        <Box position='relative' width='100%' display='flex'>
                            {/* Container for images */}
                            <Image src={person1} alt='Banner Image' sizes='100vw' style={{ width: '33.33%', height: 'auto' }} />
                            <Image src={person2} alt='Banner Image' sizes='100vw' style={{ width: '33.33%', height: 'auto' }} />

                            <Image src={person3} alt='Banner Image' sizes='100vw' style={{ width: '33.33%', height: 'auto' }} />

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
                                <Typography variant='h6' textTransform='uppercase' letterSpacing={'10px'}>
                                    Perfect for all occasions
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* see the latest */}
            <Container my={8}>
                <Box my={5} textAlign='center'>
                    <Typography variant='h5' fontWeight='bold' color='text.secondary'>
                        See the latest
                    </Typography>
                    <Box mt={1} display='flex' alignItems='center' justifyContent='center'>
                        <Typography variant='body1'>Handpicked for you</Typography>
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
            <Image src={banner} alt='Banner Image' sizes='100vw' style={{ width: '100%', height: 'auto' }} />

            {/* hoodies features */}
            <Box mb={8} backgroundColor='#E9EAF0' p={{ xs: 5, md: 10 }} textAlign='center'>
                <Image src={HoodieFeatures} alt='Banner Image' sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                <Box mt={3} display='flex' flexDirection={{ xs: 'column', md: 'row' }} justifyContent='center'>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '30px',
                            px: { xs: 10, md: 15 },
                            py: 1,
                            mr: { xs: 0, md: 5 },
                            mb: { xs: 2, md: 0 },
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                        }}>
                        Explore More
                    </Button>
                    <Box>
                        <Box display='flex' alignItems='center'>
                            <Typography color='text.primary' variant={{ xs: 'h6', md: 'h5' }} fontWeight='bold'>
                                ₹ 5000.00
                            </Typography>
                            <Typography color='green' variant={{ xs: 'h6', md: 'h5' }} fontWeight='bold' ml={1}>
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
                            <Typography variant='caption' color='text.tertiary' mt={0.2}>
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
                        <Typography variant='h5' fontWeight='bold' color='text.secondary'>
                            Our Bestsellers
                        </Typography>
                        <Box mt={0.5} display='flex' alignItems='center' color='text.tertiary' justifyContent='center'>
                            <Typography variant='body1'>Don&apos;t miss out Top Selling styles</Typography>
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
                        <Typography variant='h5' fontWeight='bold' color='text.secondary'>
                            Join our 300k+ Nobero Community
                        </Typography>
                        <Box mt={0.5} display='flex' alignItems='center' color='text.tertiary' justifyContent='center'>
                            <Typography variant='body1'>Ready, Jet-set, Go.</Typography>
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
        </React.Fragment>
    );
};

export default Page;
