import React, { Component } from 'react';
import { Typography } from '@mui/material'

class Footer extends Component {
    render() {
        return (
            <Typography variant="caption" display="block" align="right" sx={{ m: 2 }} gutterBottom>
                Ⓒ Dipti Rani 2021 - All rights reserved
            </Typography>
        )
    }
}

export default Footer;