var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var KitchenScales = require('./components/KitchenScales');

var icing = [
  {ingredient: "sugar",
unit: "Gram",
quantity: 100},
{ingredient: "butter",
unit: "Gram",
quantity: 50}
];

ReactDOM.render(
  <KitchenScales ingredients={icing}/>,
  document.getElementById('app')
);
