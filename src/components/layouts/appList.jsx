'use client';

import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useMenu from '@/hooks/useMenu';
import { Navlinks } from '@/data/navlinks';

function AppList() {
    const { anchorEl, openMenu, closeMenu } = useMenu();

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
            }}>
            <Box display='flex' alignItems='center'>
                <IconButton size='large' edge='start' aria-label='menu' onClick={openMenu} sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component='div'>
                    <Link href='/' passHref>
                        <Image src='images/logo.svg' alt='Logo' width={100} height={33} />
                    </Link>
                </Typography>
            </Box>

            <AppMenu anchorEl={anchorEl} open={Boolean(anchorEl)} closeMenu={closeMenu} />
        </Box>
    );
}

function AppMenu(props) {
    const { anchorEl, open, closeMenu } = props;

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            sx={{ display: { xs: 'block', md: 'none' } }}>
            {Navlinks.map((page, i) => (
                <MenuItem key={i} onClick={closeMenu}>
                    <Typography textAlign='center'>
                        <Link href={page.to} passHref>
                            {page.name}
                        </Link>
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    );
}

export default AppList;
