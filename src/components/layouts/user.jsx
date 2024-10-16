'use client';

import { Box, Button, Divider, IconButton, Menu, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import useHoverMenu from '@/hooks/useHoverMenu';
import Link from 'next/link';
import { useProfile } from '@/api/profile/client';

function User() {
    const { anchorEl, openMenu, closeMenu } = useHoverMenu({ menuId: 'user-menu' });

    return (
        <Fragment>
            <IconButton sx={{ mx: 1 }} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <PersonOutlineOutlinedIcon sx={{ fontSize: '28px' }} />
            </IconButton>

            <UserMenu anchorEl={anchorEl} closeMenu={closeMenu} />
        </Fragment>
    );
}

function UserMenu(props) {
    const { anchorEl, closeMenu } = props;
    const { data } = useProfile();

    return (
        <Menu
            id='user-menu'
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            MenuListProps={{ onMouseLeave: closeMenu }} // Close on mouse leave
            getContentAnchorEl={null}
            disableScrollLock
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
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
                <Typography variant='caption'>To access account and manage orders</Typography>
                {data ? (
                    <Typography variant='subtitle1'>{data.profile?.name}</Typography>
                ) : (
                    <Button
                        size='small'
                        href='/auth/login'
                        variant='outlined'
                        sx={{
                            mt: 1,
                        }}>
                        Login / signup
                    </Button>
                )}
            </Box>
            <Divider sx={{ my: 2 }} />

            <Box>
                {['Orders', 'Wishlist', 'Gift Cards', 'Contact Us'].map(text => (
                    <Link href='/accounts/dashboard' key={text}>
                        <Typography
                            variant='caption'
                            color='text.tertiary'
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.009)',
                                    color: 'black',
                                    // fontSize: '14px',
                                },
                            }}>
                            {text}
                        </Typography>
                        <br />
                    </Link>
                ))}
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box>
                {['Saved Cards', 'Coupons', 'Saved Addresses', 'Credit', 'Saved VPA'].map(text => (
                    <React.Fragment key={text}>
                        <Typography
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
                    </React.Fragment>
                ))}
            </Box>
        </Menu>
    );
}

export default User;
