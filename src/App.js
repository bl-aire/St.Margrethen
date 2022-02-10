import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import './App.css';
import logo from './header-logo.png';

const useStyles = makeStyles({
  containerBox : {
    display:"flex",
    justifyContent: "space-between"
  },
  childBox : {
    paddingRight: "4em",
    alignSelf: "center"
  }

}
)

function App() {
  const classes = useStyles ();
  return (
    <div className="App">
      <header>
        <Box className={classes.containerBox}>
          <Box>
            <img src={logo} className="App-logo" alt="logo"></img>
          </Box>
          <Box className={classes.containerBox}>
            <Box className={classes.childBox}>
              Home
            </Box>
            <Box className={classes.childBox}>
              About Us
            </Box>
            <Box className={classes.childBox}>
              Our Services
            </Box>
            <Box className={classes.childBox}>
              What to expect
            </Box>
            <Box className={classes.childBox}>
              Feedback
            </Box>
            <Box className={classes.childBox}>
              Contact
            </Box>
          </Box>
        </Box>
      </header>
    </div>
  );
}

export default App;
