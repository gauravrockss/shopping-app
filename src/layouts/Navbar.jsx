import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Search from '@/components/Search';
import CategoriesMenu from './components/CategoriesMenu';
import { useMenu } from '@/hooks/useMenu';
import { List, ListItem } from '@mui/material';

const NavbarHeight = '80px';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { anchorEl, closeMenu, openMenu } = useMenu();

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setHoveredIndex(null); // Reset hovered index when closing the menu
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClose = e => {
        if (e.currentTarget.localName !== 'ul') {
            const menu = document.getElementById('category-menu').children[2];
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight,
            };

            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        closeMenu(e);
    };

    // Example array for pages with submenu items
    const pages = [
        {
            name: 'Men',
            to: '/',
            category: [
                { name: 'Joggers', image: 'nav1.webp' },
                { name: 'Co-Ord Sets', image: 'nav2.avif' },
                {
                    name: 'Oversized T-Shirts',
                    image: 'nav3.webp',
                },
                { name: 'T-Shirts', image: 'nav4.avif' },
                { name: 'Shorts', image: 'nav5.avif' },
            ],
        },
        {
            name: 'Women',
            to: '/about',
            category: [
                { name: 'T-Shirts', image: 'nav6.avif' },
                {
                    name: 'Oversized T-Shirts',
                    image: 'nav7.avif',
                },
            ],
        },
        { name: 'Classic Tees', to: '/about' },
        { name: 'Oversized Tees', to: '/about' },
        { name: 'Fashion Joggers', to: '/about' },
        { name: 'Hoodies', to: '/about' },
        { name: 'Travel Hoodies', to: '/about' },
    ];

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'background.default',
                    px: 2,
                    boxShadow: 'none',
                    borderBottom: ' 1px solid',
                    borderColor: 'divider',
                }}>
                <Toolbar
                    disableGutters
                    sx={{
                        '&.MuiToolbar-root': {
                            minHeight: NavbarHeight,
                        },
                    }}>
                    {/* Desktop Menu */}
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <Link href='/' passHref>
                            <Image src='images/logo.svg' alt='Logo' width={100} height={33} />
                        </Link>
                    </Typography>

                    {/* Mobile Menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}>
                        <Box display='flex' alignItems='center'>
                            <IconButton
                                size='large'
                                edge='start'
                                aria-label='menu'
                                onClick={handleOpenNavMenu}
                                sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' component='div'>
                                <Link href='/' passHref>
                                    <Image
                                        src='images/logo.svg'
                                        alt='Logo'
                                        width={100}
                                        height={33}
                                    />
                                </Link>
                            </Typography>
                        </Box>

                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}>
                            {pages.map((page, i) => (
                                <MenuItem key={i} onClick={handleCloseNavMenu}>
                                    <Typography textAlign='center'>
                                        <Link href={page.to} passHref>
                                            {page.name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu Items */}
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
                        {pages.map((page, i) => (
                            <ListItem
                                disablePadding
                                key={i}
                                onMouseOver={e => {
                                    setHoveredIndex(i); // Set hovered index on hover
                                    openMenu(e);
                                }}
                                onMouseLeave={e => {
                                    setHoveredIndex(null);
                                    handleClose(e);
                                }} // Set hovered index on hover // Reset hover index when leaving
                                sx={{
                                    position: 'relative',
                                    width: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 1301,
                                    color: 'inherit',

                                    '&:hover': {
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0, // Position underline below the text
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            backgroundColor: '#EB4343', // Color for underline
                                        },
                                    },
                                }}>
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

                                {/* Dropdown Menu for Submenu Items */}
                            </ListItem>
                        ))}
                    </List>

                    {/* User Menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    display: { lg: 'flex', xs: 'none' },
                                }}>
                                <Search />
                            </Box>
                            <Box
                                sx={{
                                    ml: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                <IconButton sx={{ mx: 1 }}>
                                    <PersonOutlineOutlinedIcon sx={{ fontSize: '28px' }} />
                                </IconButton>
                                <IconButton>
                                    <ShoppingBagOutlinedIcon sx={{ fontSize: '28px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <CategoriesMenu
                anchorEl={anchorEl}
                categories={pages[hoveredIndex]?.category}
                open={Boolean(anchorEl) && pages[hoveredIndex]?.category}
                closeMenu={handleClose}
            />
        </>
    );
};

export default Navbar;
