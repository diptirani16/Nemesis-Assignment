import React, { Component } from 'react';
import { Fab, Dialog, DialogTitle, Box, DialogContent, TextField, DialogActions, Button, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

class Edit extends Component {
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

        this.handleOpenEditDialog = this.handleOpenEditDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveData = this.saveData.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
    }

    handleOpenEditDialog(id) {
        this.setState({
            open: true
        })
        this.props.result.map(obj => {
            if(obj.id === id){
                this.setState({
                    'name': obj.name,
                    'username': obj.username,
                    'email': obj.email,
                    'phone': obj.phone,
                    'website': obj.website
                })
            }
            return 0;
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

    saveData (id) {
        const { name, username, email, phone, website } = this.state;
        console.log('hello')

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
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
            console.log(data);
            this.props.result.map(obj => {
                if(obj.id === id){
                    let indexOfOldData = this.props.result.indexOf(obj);
                    let temp = this.props.result;
                    obj = data;
                    temp.splice(indexOfOldData, 1, obj)
                    this.props.updateState(temp)
                }
                return 0;
            })
            this.setState({
                open: false
            })
        })

    }

    render() {
        return (
            <>
                <Tooltip title="Edit" placement="top">
                    <Fab style={{ marginLeft: '1em' }} size="small" aria-label="Edit" onClick={() => this.handleOpenEditDialog(this.props.id)} color="primary">
                        <EditIcon />
                    </Fab>
                </Tooltip>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Edit</DialogTitle>
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
                        <Button onClick={() => this.saveData(this.props.id)} variant="contained" size="small">SAVE CHANGES</Button>
                        <Button onClick={this.handleClose} color="inherit">CANCEL</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default Edit;
