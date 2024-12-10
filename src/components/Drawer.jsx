import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material';


const RightDrawer = ({ isOpen, toggleDrawer }) => {


    const list = (
        <Box
            sx={{ width: 350, display: 'flex', flexDirection: 'column' }}
            role="presentation"
        >
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginLeft: '30px',
                    gap: 2
                }}
            >
                <img
                    src="/assets/cart.png"
                    alt="Overlay Image"
                    style={{ width: '50%', height: 'auto', }}
                />
                <Typography variant='h1' sx={{ fontSize: '1rem', fontWeight: 'bold' }}>No Products in the cart</Typography>
                <Button variant='contained'
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    sx={{ borderRadius: '0' }}
                >Return To Shop</Button>
            </Box>

        </Box >

    );

    return (
        <SwipeableDrawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <Box>
                <List sx={{ display: 'flex', justifyContent: "flex-start" }}>
                    <ListItem sx={{ fontWeight: 'bold' }}>SHOPPING CART</ListItem>
                    <Button variant='text'
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        sx={{ ml: 10, mr: 2, whiteSpace: 'nowrap', color: 'black', ":hover": { cursor: 'pointer' } }}>
                        X Close
                    </Button>
                </List>
            </Box>
            <Divider />
            {list}
        </SwipeableDrawer>
    );
};

export default RightDrawer;
