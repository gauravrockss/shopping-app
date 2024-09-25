import { Box, Menu, MenuItem, Popover, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

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
                        <Typography textAlign='center' fontWeight='bold' mt={1}>
                            {category.name}
                        </Typography>
                    </Box>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default CategoriesMenu;
