import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Landing from './Landing';
import FindRecipe from './FindRecipe';
import ImageLookUp from './ImageLookUp';


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Grid container spacing={1}>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/find-recipe" component={FindRecipe} />
      <Route exact path="/what-is-this" component={ImageLookUp} />
      </Grid>
    </BrowserRouter>
  );
}
};

export default App;
