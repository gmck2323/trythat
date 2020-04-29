import React from 'react';
import './LookUpForm.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const ImageLinkForm = ({ onInputChange, onButtonSubmit,imageUrl }) => {
    const classes = useStyles();


    return(
    <div>
        <p className="f3">
            {'Let\'s check out what you\'ve got there'}
        </p>
        <div>
        <TextField
                label="Put Image URL Here"
                onChange={onInputChange}
                />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SearchIcon />}
                onClick={onButtonSubmit}
            >
                Detect
            </Button>
            <div >
            <img id='input-image' alt="" src={imageUrl} style ={{maxWidth: "500px"}}/>
            </div>
        </div>
    </div>

    );
}

export default ImageLinkForm 