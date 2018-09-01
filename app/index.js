var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./App.js');
var WeightUnit = require('./utils/units').WeightUnit;
var VolumeUnit = require('./utils/units').VolumeUnit;

var icing = [
  {ingredient: "sugar",
unit: WeightUnit.Gram,
quantity: 1000},
{ingredient: "butter",
unit: WeightUnit.Ounce,
quantity: 5},
{ingredient: "milk",
unit: VolumeUnit.Millilitre,
quantity: 400},
{ingredient: "water",
unit: VolumeUnit.GallonUS,
quantity: 0.5}
];
var recipeYield = 4;

ReactDOM.render(
  <App ingredients={icing} recipeYield={recipeYield}/>,
  document.getElementById('app')
);
