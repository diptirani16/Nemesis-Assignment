import { Toolbar, AppBar, Box, Typography, Avatar } from '@mui/material';
import React from 'react';
import { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Details
                            </Typography>
                            <Avatar>D</Avatar>
                        </Toolbar>
                    </AppBar>
                </Box>
        )
    }
}

export default Header;