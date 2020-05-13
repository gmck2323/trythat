import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import gdimg from './images/group-dinner.jpg';
import hero from './images/pizza-drink.jpg';
import drinks from './images/drinks.jpg';
import taco from './images/taco-lime.jpg';

const useStyles = makeStyles(theme => ({
    img: {
      display: 'flex',
      margin: 'auto'
    },
  }));  

const Landing = () => {
    const classes = useStyles(); 
    return (
        <div>
            <Grid container spacing={4} justify="center" alignItems="center" style = {{textAlign: "center"}}>
                <Grid item xs={12}>
                <div style={{ textAlign: 'center', marginBottom: '100px'}}>
                    <img alt="pizza-hero" style={{width: '100%'}} src={hero}/>
                    <div>
                    <span style={{fontSize: '50px'}}>
                        Welcome to Trythat!
                    </span><br></br>
                    <span>We're here to help you figure out what to eat.</span>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{background: '#E7E1E0'}}>
                    <img alt="group-meal" src={gdimg} className={classes.img} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} style={{margin: "auto"}}>
                        <h1>Sample text here.</h1>
                        <h2>Have ingredients but don't know how to use them.
                            Let us help! With multiple options for cuisines and
                             dietary restrictions. We'll be sure to help you find
                             a great meal! 
                        </h2>
                    </Paper>
                    <Link to="/find-recipe">
                    <Button variant="contained" color="primary">
                    Use My Ingredients
                    </Button>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} className="cocktail">
                    <Paper elevation={0}><h1>Sample text here.
                    </h1><h2>Do you like drinking? Of course you do, who doesnt.
                        So lets find you the perfect drink with the ingredients you have.
                        </h2></Paper>
                    <Button variant="contained" color="secondary">
                    Coming Soon!
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} style={{background: '#E7E1E0'}} className="cocktail">
                    <img alt="group-meal" src={drinks} className={classes.img} />
                </Grid>
                
                <Grid item xs={12} sm={6} style={{background: '#E7E1E0'}}>
                    <img alt="group-meal" src={taco} className={classes.img} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0}><h1>What is in this?
                    </h1><h2>Utilizing Ai we can figure out some core ingredients by picture
                    or if you don't know what an ingredient is or what a picture of a dish. 
                    Most likely contains.</h2></Paper>
                    <Link to="/what-is-this">
                    <Button variant="contained" color="primary">
                    Curious?
                    </Button>
                    </Link>
                </Grid>
            </Grid>    
            </div>
    
        )};

export default Landing;