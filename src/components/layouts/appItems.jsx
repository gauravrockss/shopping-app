'use client';

import { Navlinks } from '@/data/navlinks';
import useHoverMenu from '@/hooks/useHoverMenu';
import { Box, List, ListItem, Typography, Divider, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Image from 'next/image';

const AppItems = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { anchorEl, closeMenu, openMenu } = useHoverMenu({ menuId: 'app-menu', onMenuClose: () => setHoveredIndex(null) });

    return (
        <React.Fragment>
            <List
                disablePadding
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: 5,
                    minHeight: 'inherit',
                    color: 'black',
                    mr: 'auto',
                    '&:hover': {
                        color: '#BDBDBD',
                    },
                }}>
                {Navlinks.map((page, i) => (
                    <ListItem
                        disablePadding
                        key={i}
                        onMouseOver={e => {
                            setHoveredIndex(i); // Set hovered index on hover
                            openMenu(e);
                        }}
                        onMouseLeave={closeMenu} // Reset hover index when leaving
                        sx={{
                            position: 'relative',
                            width: 'auto',
                            cursor: 'pointer',
                            zIndex: 1301,
                            color: 'inherit',
                            '&:hover': {
                                '#active': {
                                    opacity: 1,
                                },
                            },
                        }}>
                        <Box
                            id='active'
                            sx={{
                                opacity: hoveredIndex === i ? 1 : 0,
                                position: 'absolute',
                                bottom: 0, // Position underline below the text
                                left: 0,
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#EB4343',
                            }}
                        />

                        <Typography
                            sx={{
                                color: hoveredIndex === i ? '#000' : 'inherit',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                cursor: 'pointer',
                            }}>
                            <Link
                                href={page.to}
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                {page.name}
                            </Link>
                        </Typography>
                    </ListItem>
                ))}
            </List>

            {/* Categories Menu */}
            <AppMenu
                anchorEl={anchorEl}
                categories={Navlinks[hoveredIndex]?.category}
                open={Boolean(anchorEl) && Navlinks[hoveredIndex]?.category}
                closeMenu={closeMenu}
            />
        </React.Fragment>
    );
};

const AppMenu = props => {
    const { anchorEl, categories, open, closeMenu } = props;

    return (
        <Menu
            id='app-menu'
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
                                <Image src={`/images/${category.image}`} alt='image' width={150} height={150} />
                                <Typography textAlign='center' fontWeight='bold' mt={1}>
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
                            <Typography fontWeight='bold'>See the latest</Typography>
                            <Typography variant='body2'>Explore the new clothes</Typography>
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
                            <Typography fontWeight='bold'>See the latest</Typography>
                            <Typography variant='body2'>Explore the new clothes</Typography>
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
                            <Typography fontWeight='bold'>See the latest</Typography>
                            <Typography variant='body2'>Explore the new clothes</Typography>
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

export default AppItems;
