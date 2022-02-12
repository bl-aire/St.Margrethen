import React from "react";
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    makeStyles,
    Typography,
    useTheme,
    useMediaQuery,
} from "@material-ui/core"
import DrawerComponent from "./drawer.js";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
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
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "red",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>

                <Typography>Logo</Typography>

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