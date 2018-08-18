var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var KitchenScales = require('./components/KitchenScales');
var WeightUnit = require('./utils/units').WeightUnit;

var icing = [
  {ingredient: "sugar",
unit: WeightUnit.Gram,
quantity: 1000},
{ingredient: "butter",
unit: WeightUnit.Gram,
quantity: 500}
];
var recipeYield = 20;

ReactDOM.render(
  <KitchenScales ingredients={icing} recipeYield={recipeYield}/>,
  document.getElementById('app')
);
