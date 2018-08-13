var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var KitchenScales = require('./components/KitchenScales');

var tempuraIngredients = [
  {ingredient: "flour",
unit: "US cup",
quantity: 1},
{ingredient: "water",
unit: "US cup",
quantity: 1},
{ingredient: "egg",
unit: "each",
quantity: 1}
];

ReactDOM.render(
  <KitchenScales ingredients={tempuraIngredients}/>,
  document.getElementById('app')
);
