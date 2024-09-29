import { Navlinks } from '@/data/navlinks';
import useHoverMenu from '@/hooks/useHoverMenu';
import { Box, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import CategoriesMenu from './CategoriesMenu';

const NavItems = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { anchorEl, closeMenu, openMenu } = useHoverMenu({ menuId: 'category-menu', onMenuClose: () => setHoveredIndex(null) });

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
            <CategoriesMenu
                anchorEl={anchorEl}
                categories={Navlinks[hoveredIndex]?.category}
                open={Boolean(anchorEl) && Navlinks[hoveredIndex]?.category}
                closeMenu={closeMenu}
            />
        </React.Fragment>
    );
};

export default NavItems;
