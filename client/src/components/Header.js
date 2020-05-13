import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from './images/logo_transparent.png';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    home: {
      color: '#142A6A',
      fontSize: '26px',
    },
    options: {
        color: '#142A6A',
        fontSize: '26px',
      },
    nav: {
        background: '#E7E1E0',
    }
  }));  

export default function Header() {
        const classes= useStyles();
        
        return(
            <div className={classes.root}>
                <AppBar className={classes.nav}>
                <Toolbar>
                    <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                        <Grid item xs={2}>
                        <Typography variant="h6" className={classes.home}>
                        <NavLink to="/" style={{ textDecoration: 'none', color: '#142A6A' }}><strong>Home</strong></NavLink>
                        </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                        <Link to="/"><img src={logo} style={{maxHeight: '100px', textAlign: 'center', margin: 'auto'}}alt="logo" /></Link>
                        </div>
                        </Grid>
                        <Grid item xs={2}>
                        <Typography variant="h6" className={classes.options}>
                        <NavLink to="/find-recipe" style={{ textDecoration: 'none', color: '#142A6A' }}>Find New Recipe</NavLink>
                        </Typography>
                        </Grid>
                        <Grid item xs={1}>
                        <Typography variant="h6" className={classes.options}>
                        <NavLink to="/what-is-this" style={{ textDecoration: 'none', color: '#142A6A' }}>What is this?</NavLink>
                        </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
