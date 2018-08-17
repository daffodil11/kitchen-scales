var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var KitchenScales = require('./components/KitchenScales');

var icing = [
  {ingredient: "sugar",
unit: "Gram",
quantity: 1000},
{ingredient: "butter",
unit: "Gram",
quantity: 500}
];
var recipeYield = 10;

ReactDOM.render(
  <KitchenScales ingredients={icing} recipeYield={recipeYield}/>,
  document.getElementById('app')
);
