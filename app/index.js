var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./App.js');
var WeightUnit = require('./utils/units').WeightUnit;
var VolumeUnit = require('./utils/units').VolumeUnit;
import recipe from './example_recipe.json'
console.log(recipe);

ReactDOM.render(
  <App ingredients={recipe.ingredients} recipeYield={recipe.yield}/>,
  document.getElementById('app')
);
