import React, {useEffect,useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {cuisineOptions, dietaryOptions } from './data';
import { useForm, Controller } from "react-hook-form";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 15
  },
  media: {
    height: 140,
  },
});


export default function Search(){

    const animatedComponents = makeAnimated();
    const { handleSubmit, control } = useForm();
    const [searchResults, setSearchResults] = React.useState([]);
    const [ingredients,setIngredients] = useState([]);

    const classes = useStyles();

    const onSubmit = data => {
      // const ingredients = data.ingredients.map((ingredient) => ingredient.value);
      // const cuisines = data.cuisine.map((cuisine) => cuisine.value);
      // const diets = data.diet.map((diet) => diet.value);

      let ingredients = [];
      let cuisines = [];
      let diets = [];
      if(data.ingredients){
      for(let i = 0; i < data.ingredients.length; i++){
        ingredients.push(data.ingredients[i].value);
      }
    }
      if(data.cuisine){
        for(let i = 0; i < data.cuisine.length; i++){
          ingredients.push(data.cuisine[i].value);
        }
      }
      if(data.diet){
        for(let i = 0; i < data.diet.length; i++){
          ingredients.push(data.diet[i].value);
        }
      }
      
      ingredients = ingredients.join();
      cuisines = cuisines.join();
      diets = diets.join();

      axios.post('/api/recipes', {
        ingredients: ingredients,
        cuisine: cuisines,
        diet: diets
      })
      .then(function (response) {
        setSearchResults(response.data.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    useEffect(() => {
      axios.get(`/api/my-ingredients`)
      .then(({ data }) =>{
        setIngredients(data);
      });
    }, []);

    return(
      <div align="center">
        <h2>Let's Find A Great Recipe!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="search-bar">
            <h3 style = {{marginBottom: "10px"}}>Ingredients</h3>
          <Controller
            as={<Select components={animatedComponents}
            isMulti
            options={ingredients} />}
            control={control}
            onChange={([selected]) => {
              
              return selected;
            }}
            name="ingredients"
          />
          </div>
          <div className="search-bar">
          <h3 style = {{marginBottom: "10px"}}>Cuisines</h3>
          <Controller
            as={<Select components={animatedComponents}
            isMulti
            options={cuisineOptions} />}
            control={control}
            onChange={([selected]) => {
              
              return selected;
            }}
            name="cuisine"
          />
          </div>
          <div className="search-bar"> 
          <h3 style = {{marginBottom: "10px"}}>Diets</h3>
          <Controller
            as={<Select components={animatedComponents}
            isMulti
            options={dietaryOptions} />}
            control={control}
            onChange={([selected]) => {
              
              return selected;
            }}
            name="diet"
          />
          </div>
          <Button variant="contained" color="secondary" size="large" type="submit">
            Find Recipe!
        </Button>
        </form>
        <div className="results">
        {searchResults.map(results => (
          <Card className={classes.root} key={results.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={results.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {results.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Check it Out
        </Button>
      </CardActions>
    </Card>
        ))}
        </div>
      </div>
    );
};