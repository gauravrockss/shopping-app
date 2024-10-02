import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Search from '@/components/Search';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import { Navlinks } from '@/data/navlinks';
import NavItems from './components/NavItems';

const NavbarHeight = '80px';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null); // State for user menu anchor

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = event => {
        console.log('User menu button clicked'); // Check if the event triggers
        setAnchorElUser(event.currentTarget); // Set anchor element
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        console.log('Closing user menu');
        setAnchorElUser(null); // Clear anchor element
    };

    return (
        <>
            <AppBar
                position='sticky'
                sx={{
                    backgroundColor: 'background.default',
                    px: 2,
                    boxShadow: 'none',
                    borderBottom: ' 1px solid',
                    borderColor: 'divider',
                    zIndex: 1301,
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
                            {Navlinks.map((page, i) => (
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
                    <NavItems />

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
                                <IconButton
                                    sx={{ mx: 1 }}
                                    onClick={handleOpenUserMenu}>
                                    {' '}
                                    {/* Clicking here should trigger the user menu */}
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
            </AppBar>

            {/* User Menu */}
            <Menu
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                sx={{
                    mt: 1,
                    width: 320,
                    '& .MuiPaper-root': {
                        width: '320px',
                        p: 2,
                    },
                }}>
                <Box>
                    <Typography variant='caption' fontWeight='bold'>
                        Welcome
                    </Typography>
                    <br />
                    <Typography variant='caption'>
                        To access account and manage orders
                    </Typography>
                    <Button
                        size='small'
                        href='/auth/login'
                        variant='outlined'
                        sx={{
                            mt: 1,
                        }}>
                        Login / signup
                    </Button>
                </Box>
                <Divider sx={{ my: 2 }} />

                <Box>
                    {['Orders', 'Wishlist', 'Gift Cards', 'Contact Us'].map(
                        (text, i) => (
                            <>
                                <Typography
                                    key={text}
                                    variant='caption'
                                    color='text.tertiary'
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(1.009)',
                                            color: 'black',
                                            fontSize: '14px',
                                        },
                                    }}>
                                    {text}
                                </Typography>
                                <br />
                            </>
                        )
                    )}
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box>
                    {[
                        'Saved Cards',
                        'Coupons',
                        'Saved Addresses',
                        'Credit',
                        'Saved VPA',
                    ].map((text, i) => (
                        <>
                            <Typography
                                key={text}
                                variant='caption'
                                color='text.tertiary'
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.009)',
                                        color: 'black',
                                        fontSize: '14px',
                                    },
                                }}>
                                {text}
                            </Typography>
                            <br />
                        </>
                    ))}
                </Box>
            </Menu>
        </>
    );
};

export default Navbar;
