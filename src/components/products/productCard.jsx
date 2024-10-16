import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

export default function ProductCard({ item }) {
    const originalPrice = (parseFloat(item.price) / 0.43).toFixed(2);
    const discountPercentage = 57;

    return (
        <Card style={{ margin: '10px' }} elevation={0}>
            <CardMedia component='img' image={`/images/latest/${item.imageUrl}`} alt='Classic T-shirt' width={540} height={507} />
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
}
