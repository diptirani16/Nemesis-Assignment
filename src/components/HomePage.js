import React, { Component } from 'react';
import Add from './Add';
import Edit from './Edit';
import DeleteData from './Delete';
import Footer from './Footer';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container  } from '@mui/material';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        }

        this.updateState = this.updateState.bind(this);
        
    }     

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                result: data
            })
        })
    }
    
    updateState(newData) {
        this.setState({
            result: newData
        })
        console.log(this.state.result)
    }



      
    render() {
        return (
            <>
            <Container>
                <TableContainer component={Paper} style={{ marginTop: '10%'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Username</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Phone</TableCell>
                                <TableCell align="left">Website</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.result.map((row) => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.username}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.phone}</TableCell>
                                    <TableCell align="left">{row.website}</TableCell>
                                    <TableCell>
                                        <Edit result={this.state.result} updateState={this.updateState} id={row.id} />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteData result={this.state.result} updateState={this.updateState} id={row.id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            <Add result={this.state.result} updateState={this.updateState} />
            <Footer />
            </>
        )
    }
}

export default HomePage;