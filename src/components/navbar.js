import React from "react";
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "./drawer.js";
import logo from "./header-logo.png";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(35),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        right:"0",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "red",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <AppBar position="static" style={{ background: "#FFFFFF" }}>
            <CssBaseline />
            <Toolbar>

                <img src={logo}></img>

                {isMobile ? (<DrawerComponent />) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About Us
                        </Link>
                        <Link to="/services" className={classes.link}>
                            Our services
                        </Link>
                        <Link to="/wte" className={classes.link}>
                            What To Expect
                        </Link>
                        <Link to="/feedback" className={classes.link}>
                            Feedback
                        </Link>
                        <Link to="/contact" className={classes.link}>
                            Contact
                        </Link>
                    </div>)}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

//<Typography variant="h4" className={classes.logo}>Navbar</Typography>