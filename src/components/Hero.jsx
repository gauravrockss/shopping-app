import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import { Box } from '@mui/material';

const items = [
    {
        image: '/images/img1.webp',
    },
    {
        image: '/images/img2.webp',
    },
    {
        image: '/images/img3.webp',
    },
    {
        image: '/images/img4.webp',
    },
];

function CarouselItem(props) {
    return (
        <Box position='relative' width='100%' height='600px'>
            <Image
                src={props.item.image}
                alt={props.item.name}
                fill
                style={{
                    objectFit: 'cover',
                }}
            />
        </Box>
    );
}

export default function Hero() {
    return (
        <>
            <Carousel>
                {items.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </Carousel>
        </>
    );
}
