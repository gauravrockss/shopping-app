import { IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import React, { Fragment } from 'react';

function Cart() {
    return (
        <Fragment>
            <IconButton>
                <ShoppingBagOutlinedIcon sx={{ fontSize: '28px' }} />
            </IconButton>
        </Fragment>
    );
}

export default Cart;
