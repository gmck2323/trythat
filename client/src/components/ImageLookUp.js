import React, {Component} from 'react';
import ingpic from './images/ingredients-2.jpg';
import LookUp from './LookUpForm/LookUpForm';
import RenderIngredients from './LookUpForm/RenderIngredients';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';




const initialState = {
    input: '',
    imageUrl: '',
    ingredients: [],
    isFetching: false
  }

const styles = theme => ({
    img: {
      display: 'flex',
      margin: 'auto'
    },
  });  
 

class FindRecipe extends Component {
    constructor(){
        super();
        this.state = initialState
      }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    getIngredients = (data) => {
        let inArr = [];
        let ingList = data.outputs[0].data.concepts;
        for(let i = 0; i < ingList.length; i++) {
            inArr.push(ingList[i].name)
        }

        return inArr
    }

    onButtonSubmit = () => {
        this.setState({...this.state, isFetching: true});
        this.setState({imageUrl: this.state.input});
        fetch('https://trythat.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
        .then(response => response.json())
        .then(response => {
          let ings = this.getIngredients(response)
          this.setState({ingredients: ings, isFetching: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false});
        });
        
    }

    

    
    render(){
    const {imageUrl, ingredients, isFetching} = this.state;
    const { classes } = this.props;
    return(
        <Grid container justify="center" alignItems="center" style = {{textAlign: "center"}}>
            <Grid item xs={12}>
                <img alt="ingredients" src={ingpic} className={classes.img}/>
            </Grid>
            <Grid item xs={12}>
            <h1>What is this?</h1>
                <LookUp onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} imageUrl={imageUrl}/>
            </Grid>
            <Grid item xs={12}>
                <RenderIngredients ingredients={ingredients} renderIngredients={this.renderIngredients} isFetching={isFetching} />
            </Grid>
        </Grid>
    );
}
};

export default withStyles(styles, {withTheme: true})(FindRecipe);