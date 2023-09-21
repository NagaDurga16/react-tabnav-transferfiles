import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { Component } from "react";
export default class Tabnav  extends React.Component{
    constructor(){
        super();
        this.state = {
            data: 'Home'
        };
    }
    handlerHome= ()=> {
        this.setState({data:'Home'});

    }
    handlerAbout= () => {
        this.setState({data:'About'});
    }
    handlerContent= () => {
        this.setState({data: 'Details'});
    }

    render(){
        return(
            
        <Grid>
            <button onClick={this.handlerHome}>Home</button>
            
            <button onClick={this.handlerAbout}>About</button>
            
            <button onClick={this.handlerContent}>Details</button>
            <Paper>
                <Typography variant="p">{this.state.data}</Typography>
            </Paper>
            
        </Grid>

   ) }

}