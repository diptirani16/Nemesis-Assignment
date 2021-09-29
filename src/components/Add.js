import React, { Component } from 'react';
import { Fab, Dialog, DialogTitle, Box, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: ''
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addData = this.addData.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: true
        })
    }

    handleClose () {
        this.setState({
            open:false
        })
    }

    handleName (event) {
        this.setState({
            name: event.target.value
        })
    }

    handleUsername (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleEmail (event) {
        this.setState({
            email: event.target.value
        })
    }

    handlePhone (event) {
        this.setState({
            phone: event.target.value
        })
    }

    handleWebsite (event) {
        this.setState({
            website: event.target.value
        })
    }

    addData () {
        const { name, username, email, phone, website } = this.state

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'username': username,
                'email': email,
                'phone': phone,
                'website': website
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                open: false
            })
            this.props.updateState([data, ...this.props.result])
        })
    }

    render() {
        return (
            <>
                <Fab color="secondary" aria-label="Add" style={{ position: 'fixed', right: '2%', bottom: '10%' }} onClick={this.handleClickOpen}>
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add</DialogTitle>
                    <DialogContent>
                        <Box>
                            <TextField margin="dense" id="name" label="Name" type="text" fullWidth variant="standard" size="small" onChange={this.handleName} value={this.state.name} />
                            <TextField margin="dense" id="username" label="Username" type="text" fullWidth variant="standard" size="small" onChange={this.handleUsername} value={this.state.username} />
                            <TextField margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" size="small" onChange={this.handleEmail} value={this.state.email} />
                            <TextField sx={{ my: 1 }} id="phone" label="Phone" type="number" fullWidth placeholder="Placeholder" multiline variant="standard" onChange={this.handlePhone} value={this.state.phone} />
                            <TextField sx={{ my: 1 }} id="website" label="Website" type="text" fullWidth placeholder="Placeholder" multiline variant="standard" onChange={this.handleWebsite} value={this.state.website} />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addData} variant="contained" size="small">ADD</Button>
                        <Button onClick={this.handleClose} color="inherit">CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </>

        )
    }
}

export default Add;