var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var KitchenScales = require('./components/KitchenScales');
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
quantity: 600},
{ingredient: "water",
unit: VolumeUnit.GallonUS,
quantity: 0.5}
];
var recipeYield = 20;

ReactDOM.render(
  <KitchenScales ingredients={icing} recipeYield={recipeYield}/>,
  document.getElementById('app')
);
