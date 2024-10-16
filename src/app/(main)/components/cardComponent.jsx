import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CardCompoent(props) {
    const { title, image, arrow } = props;

    return (
        <>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Card
                    elevation={0}
                    width={540}
                    height={507}
                    sx={{
                        widht: '100%',
                        position: 'relative',
                        textAlign: 'center',
                        color: 'white',
                        widht: '540px',
                        height: '507px',
                    }}>
                    {/* Image inside the Card using CardMedia */}
                    <CardMedia
                        component='img'
                        image={`/images/${image}`} // Ensure this image path is correct
                        alt='Classic T-shirt'
                        width={540}
                        height={507}
                    />

                    {/* Title on top of the image */}
                    <CardContent
                        sx={{
                            position: 'absolute',
                            top: '0px',
                            left: '50%',
                            transform: 'translateX(-50%)', // Centered horizontally
                            color: '#fff',
                            width: '100%',
                        }}>
                        <Typography
                            variant='h4'
                            sx={{
                                textTransform: 'uppercase',
                                fontSize: '30px',
                                color: 'inherit',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', // Light shadow effect
                            }}>
                            {title}
                        </Typography>
                    </CardContent>

                    {/* Button at the bottom using CardActions for better structure */}
                    <CardActions
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: '5px',
                            width: '100%',
                        }}>
                        {!arrow ? (
                            <Button
                                variant='contained'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#CECECE',
                                    color: '#090909',
                                    border: '2px solid #090909',
                                    fontWeight: 'bold',
                                    fontSize: '17px',
                                    width: '300px',
                                    borderRadius: '20px',
                                    padding: '0',
                                    overflow: 'hidden', // Ensure no overflow for rounded corners
                                }}>
                                {/* Left side of the button */}
                                <Box
                                    sx={{
                                        fontSize: '20px',
                                        backgroundColor: '#CECECE',
                                        color: '#090909',

                                        borderTopLeftRadius: '20px',
                                        borderBottomLeftRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        letterSpacing: '6px',
                                        paddingLeft: 1,
                                        ml: 2,
                                    }}>
                                    PICK ANY 3
                                </Box>

                                {/* Right side of the button */}
                                <Box
                                    sx={{
                                        fontSize: '20px',
                                        backgroundColor: '#090909',
                                        color: '#fff',

                                        borderTopLeftRadius: '20px',
                                        paddingLeft: 3,
                                        paddingRight: 0.5,
                                        borderBottomLeftRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        letterSpacing: '1px',
                                    }}>
                                    @ 999
                                </Box>
                            </Button>
                        ) : (
                            <Button
                                endIcon={<ArrowForwardIcon />}
                                variant='contained'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: '#CECECE',
                                    color: '#090909',
                                    border: '2px solid #090909',
                                    fontWeight: 'bold',
                                    fontSize: '19px',

                                    borderRadius: '20px',
                                    px: 5,
                                    py: 0,
                                    letterSpacing: '4px',
                                    overflow: 'hidden', // Ensure no overflow for rounded corners
                                }}>
                                SHOP NOW
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
