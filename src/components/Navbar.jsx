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
import Link from 'next/link'; // Next.js Link component
import Image from 'next/image';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Search from './Search';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Example array for pages and settings, replace with your own data
    const pages = [
        { name: 'Men', to: '/' },
        { name: 'Women', to: '/about' },
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
                    backgroundColor: '#fff',
                    p: 2,

                    boxShadow: 'none',
                    borderBottom: ' 1px solid #E5E7EB',
                }}>
                <Container maxWidth='none'>
                    <Toolbar disableGutters>
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
                                <Image
                                    src='images/logo.svg'
                                    alt='Logo'
                                    width={100}
                                    height={33}
                                />
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
                                    <MenuItem
                                        key={i}
                                        onClick={handleCloseNavMenu}>
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
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                            }}>
                            {pages.map((page, i) => (
                                <Typography
                                    key={i}
                                    sx={{
                                        mx: 3,
                                        position: 'relative', // Ensure relative positioning for underline
                                        color:
                                            hoveredIndex === null ||
                                            hoveredIndex === i
                                                ? '#000'
                                                : '#BDBDBD', // Default black, gray if not hovered
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: -36, // Position underline below the text
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                backgroundColor: '#EB4343', // Color for underline
                                            },
                                        },
                                    }}
                                    onMouseEnter={() => setHoveredIndex(i)} // Set hovered index on hover
                                    onMouseLeave={() => setHoveredIndex(null)} // Reset hover index when leaving
                                >
                                    <Link
                                        href={page.to}
                                        style={{
                                            color: 'inherit', // Inherit the color from Typography
                                            textDecoration: 'none',
                                        }}>
                                        {page.name}
                                    </Link>
                                </Typography>
                            ))}
                        </Box>

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
                                        <PersonOutlineOutlinedIcon
                                            sx={{ fontSize: '28px' }}
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <ShoppingBagOutlinedIcon
                                            sx={{ fontSize: '28px' }}
                                        />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
