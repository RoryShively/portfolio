import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bottomNav: {
        background: "#222",
        width: "100%",
        height: 100,
    }
}));

function BottomNav() {
  const classes = useStyles();

  return (
        <div className={classes.bottomNav}>
        
        </div>
  );
}

export default BottomNav;
