import {
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const CategoriesMenu = props => {
    const { anchorEl, categories, open, closeMenu } = props;

    return (
        <Menu
            id='category-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            keepMounted
            MenuListProps={{ onMouseLeave: closeMenu }} // Close on mouse leave
            getContentAnchorEl={null}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            sx={{
                border: '1px solid #E5E7EB',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                '& .MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
                    top: '80px !important',
                    left: '0 !important',
                    minWidth: '100vw',
                },
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 5,
                    pb: 2,
                    px: 10,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                    }}>
                    {categories?.map((category, j) => (
                        <MenuItem
                            key={j}
                            sx={{
                                display: 'flex',
                            }}>
                            <Box>
                                <Image
                                    src={`/images/${category.image}`}
                                    alt='image'
                                    width={150}
                                    height={150}
                                />
                                <Typography
                                    textAlign='center'
                                    fontWeight='bold'
                                    mt={1}>
                                    {category.name}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))}
                </Box>
                <Box>
                    <Box mr={10} display='flex' alignItems='center'>
                        <Box>
                            <Image
                                src='/images/story1.webp'
                                alt='menu icon'
                                width={50}
                                height={50}
                                style={{
                                    borderRadius: '100px',
                                }}
                            />
                        </Box>
                        <Box mx={2}>
                            <Typography fontWeight='bold'>
                                See the latest
                            </Typography>
                            <Typography variant='body2'>
                                Explore the new clothes
                            </Typography>
                        </Box>
                        <IconButton size='small'>
                            <ArrowForwardIosOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                    <Divider
                        sx={{
                            my: 1.5,

                            borderBottomWidth: '2px',
                            borderColor: 'divider',
                        }}
                    />
                    {/*  */}
                    <Box mr={10} display='flex' alignItems='center'>
                        <Box>
                            <Image
                                src='/images/story3.webp'
                                alt='menu icon'
                                width={50}
                                height={50}
                                style={{
                                    borderRadius: '100px',
                                }}
                            />
                        </Box>
                        <Box mx={2}>
                            <Typography fontWeight='bold'>
                                See the latest
                            </Typography>
                            <Typography variant='body2'>
                                Explore the new clothes
                            </Typography>
                        </Box>
                        <IconButton size='small'>
                            <ArrowForwardIosOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                    <Divider
                        sx={{
                            my: 1.5,

                            borderBottomWidth: '2px',
                            borderColor: 'divider',
                        }}
                    />
                    {/*  */}
                    <Box mr={10} display='flex' alignItems='center'>
                        <Box>
                            <Image
                                src='/images/story2.webp'
                                alt='menu icon'
                                width={50}
                                height={50}
                                style={{
                                    borderRadius: '100px',
                                }}
                            />
                        </Box>
                        <Box mx={2}>
                            <Typography fontWeight='bold'>
                                See the latest
                            </Typography>
                            <Typography variant='body2'>
                                Explore the new clothes
                            </Typography>
                        </Box>
                        <IconButton size='small'>
                            <ArrowForwardIosOutlinedIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Menu>
    );
};

export default CategoriesMenu;
