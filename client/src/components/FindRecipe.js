import React, {Component} from 'react';
import ingpic from './images/ingredients.jpg';
import Grid from '@material-ui/core/Grid';
import JokeOrTrivia from './FindRecipe/JokeOrTrivia';
import Search from './FindRecipe/Search';

const initialState = {
    ingredients: [],
    isFetching: false,
    entryq: '',
    values:[],
  }
  
class FindRecipe extends Component {
    constructor(){
        super();
        this.state = initialState
      }

      onJokeSubmit = () => {
        this.setState({...this.state, isFetching: true});
        fetch('api/food-joke', {
          method: 'get',
        })
        .then(response => response.json())
        .then(response => {
          let ent = response.data.text
          console.log(ent)
          this.setState({entryq: ent, isFetching: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false});
        });
        
    }

    onTriviaSubmit = () => {
        this.setState({...this.state, isFetching: true});
        fetch('api/food-trivia', {
          method: 'get',
        })
        .then(response => response.json())
        .then(response => {
          let ent = response.data.text
          console.log(ent)
          this.setState({entryq: ent, isFetching: false});
        })
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false});
        });
        
    }

    
       
    render(){

    const {isFetching, entryq} = this.state;
    

    return(
      <Grid container spacing={4} justify="center" alignItems="center" style = {{textAlign: "center"}}>
        <Grid item xs={12}>
            <img alt="ingredients" src={ingpic} style ={{width:'50%'}}/>
            <h1>Whatchya working with?</h1>
            </Grid>
            <Grid item xs={12}>
            <JokeOrTrivia isFetching={isFetching} entryq={entryq} joke={this.onJokeSubmit} trivia={this.onTriviaSubmit}/>
            </Grid>
            <Grid item xs={12}>
                <Search />
                </Grid>
        </Grid>
    );
}
};

export default FindRecipe