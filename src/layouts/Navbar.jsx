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
        setHoveredIndex(null); // Reset hovered index when closing the menu
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // Example array for pages with submenu items
    const pages = [
        {
            name: 'Men',
            to: '/',
            subMenu: [
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
            subMenu: [
                { name: 'T-Shirts', image: 'nav6.avif' },
                {
                    name: 'Oversized T-Shirts',
                    image: 'nav7.avif',
                },
            ],
        },
        { name: 'Classic Tees', to: '/about', subMenu: [] },
        { name: 'Oversized Tees', to: '/about', subMenu: [] },
        { name: 'Fashion Joggers', to: '/about', subMenu: [] },
        { name: 'Hoodies', to: '/about', subMenu: [] },
        { name: 'Travel Hoodies', to: '/about', subMenu: [] },
    ];

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'background.default',
                    p: 2,
                    boxShadow: 'none',
                    borderBottom: ' 1px solid',
                    borderColor: 'divider',
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
                                <Box
                                    key={i}
                                    onMouseEnter={() => setHoveredIndex(i)} // Set hovered index on hover
                                    onMouseLeave={() => setHoveredIndex(null)} // Reset hover index when leaving
                                    sx={{ position: 'relative' }}>
                                    <Typography
                                        sx={{
                                            mx: 3,
                                            color:
                                                hoveredIndex === null ||
                                                hoveredIndex === i
                                                    ? '#000'
                                                    : '#BDBDBD',
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
                                    {hoveredIndex === i &&
                                        page.subMenu.length > 0 && (
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: -250,
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #E5E7EB',
                                                    boxShadow:
                                                        '0 2px 10px rgba(0,0,0,0.1)',
                                                    zIndex: 10000,
                                                    mt: 4.5,
                                                    border: ' 1px solid #E5E7EB',
                                                    width: '100vw',

                                                    display: 'flex',
                                                    alignItems: 'center',

                                                    p: 5,
                                                    pl: 15,
                                                }}>
                                                {page.subMenu.map(
                                                    (subItem, j) => (
                                                        <Box>
                                                            <MenuItem
                                                                key={j}
                                                                sx={{
                                                                    display:
                                                                        'flex',
                                                                }}>
                                                                <Box>
                                                                    <Image
                                                                        src={`/images/${subItem.image}`}
                                                                        alt='image'
                                                                        width={
                                                                            150
                                                                        }
                                                                        height={
                                                                            150
                                                                        }
                                                                    />
                                                                    <Typography
                                                                        textAlign='center'
                                                                        fontWeight='bold'
                                                                        mt={1}>
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </Typography>
                                                                </Box>
                                                            </MenuItem>
                                                            <Box>dgsg</Box>
                                                        </Box>
                                                    )
                                                )}
                                            </Box>
                                        )}
                                </Box>
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
