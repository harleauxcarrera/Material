import React, { Component } from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from './comps/Drawer';
/////////////////////////////////////////////////////////////////////////////
const buttonStyle = {
  float: "right"

}

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class App extends Component {
  state = {
   top: false,
   left: false,
   bottom: false,
   right: false,
 };

/////////////////////////////////////////////////////////////////////////////


  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div >
      <AppBar position="static" color="secondary">
        <Toolbar color="secondary">
          <Drawer/>
          <Typography variant="title" color="inherit" >
            Title
          </Typography>
          <Button  color="inherit" style={buttonStyle} >Login</Button>
        </Toolbar>
      </AppBar>

    </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
