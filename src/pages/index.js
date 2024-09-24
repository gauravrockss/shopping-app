import React from 'react';

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid2,
    IconButton,
    Typography,
} from '@mui/material';
import Hero from '@/components/Hero';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import CardCompoent from '@/components/CardComponent';
import { men, storydata } from '@/data/men';

export default function Home() {
    return (
        <>
            <Container maxWidth='xl' sx={{ my: 5 }}>
                <Hero />
                {/* popular section */}
                <Box mt={3} textAlign='center'>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        color='text.secondary'>
                        Most Popular
                    </Typography>
                    <Box
                        mt={1}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Typography>Check Out Now</Typography>
                        <IconButton>
                            <ArrowForwardIcon />
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
                <Grid2 container display='flex' alignItems='center' p={0}>
                    {/* Left Section - Our Story */}
                    <Grid2 size={{ xs: 12, lg: 6 }} p={0}>
                        <Box
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            height='60vh'
                            justifyContent='center'>
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
                    <Grid2 size={{ xs: 12, lg: 6 }} p={0}>
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'>
                            {/* Container for images */}

                            {/* Images */}
                            <Image
                                src={'/images/story1.webp'}
                                height='500'
                                width='320'
                                alt='image 1'
                            />
                            <Image
                                src={'/images/story2.webp'}
                                height='500'
                                width='320'
                                alt='image 2'
                            />
                            <Image
                                src={'/images/story3.webp'}
                                height='500'
                                width='320'
                                alt='image 3'
                            />
                        </Box>

                        {/* Bottom Strip with Text */}
                        <Box
                            width='100%'
                            sx={{
                                background: '#243064',
                                color: '#fff', // White text color
                                textAlign: 'center',
                                py: 1,
                            }}>
                            <Typography variant='h6'>
                                Perfect for all occasions
                            </Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}
