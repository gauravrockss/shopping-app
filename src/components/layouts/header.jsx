import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/components/Search';
import User from './user';
import AppItems from './appItems';
import AppList from './appList';

const HeaderHeight = '80px';

const Header = () => {
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
                            minHeight: HeaderHeight,
                        },
                    }}>
                    {/* Desktop Menu */}
                    <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        <Link href='/' passHref>
                            <Image src='images/logo.svg' alt='Logo' width={100} height={33} />
                        </Link>
                    </Typography>

                    {/* Mobile Menu */}
                    <AppList />

                    {/* Desktop Menu Items */}
                    <AppItems />

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
                                <User />
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
