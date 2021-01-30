import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#222",
    display: "flex", 
    margin: "auto",
  },
  alert: {
    position: "fixed",
    left: "50%",
    top: 30,
    transform: "translate(-50%, -50%)",
    zIndex: 9999999,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  toolbar: {
    height: 126,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover, &:focus, &:active, &:visited": {
      color: "inherit",
      border: "none",
    },
  },
  tagline: {
    fontSize: 16,
  },
  navigation: {
    flexGrow: 10,
    textAlign: "right",
  },
  body: {
    height: 126,
  }
}));

function TopNav() {
  const classes = useStyles();

  return (
      <div>
        <div className={classes.alert}>
            <Alert severity="warning">This website is currently under construction</Alert>
        </div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Typography component={NavLink} to="/" variant="h5" className={classes.title}>
              Rory Shively
            </Typography>
            <Typography variant="h6" className={classes.tagline}>
              SWE / Technologist
            </Typography>
            <div className={classes.navigation}>
            <Button 
                component={NavLink} 
                to="/about" 
                color="inherit">
                  About Me
              </Button>
              <Button 
                component={NavLink} 
                to="/resume" 
                color="inherit">
                  Resume
              </Button>
              <Button 
                component={NavLink} 
                to="/projects" 
                color="inherit">
                  Projects
              </Button>
              <Button 
                component={NavLink} 
                to="/contact" 
                color="inherit">
                  Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.body}></div>
    </div>
  );
}

export default TopNav;
