var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
// var App = require('./App.js');
var KitchenScales = require('./KitchenScales');
var WeightUnit = require('./utils/units').WeightUnit;
var VolumeUnit = require('./utils/units').VolumeUnit;
//import recipe from './example-recipe.json'

// if (recipe.servingType) {
//   ReactDOM.render(
//     <App ingredients={recipe.ingredients} recipeYield={recipe.yield} servingType={recipe.servingType}/>,
//     document.getElementById('app')
//   );
// } else {
//   ReactDOM.render(
//     <App ingredients={recipe.ingredients} recipeYield={recipe.yield}/>,
//     document.getElementById('app')
//   );
// }

export default class MetaApp extends React.Component {
  render () {
    return (
      <div>
        <KitchenScales
          ingredients={this.props.recipe.ingredients}
          recipeYield={this.props.recipe.recipeYield}
          servingType={this.props.recipe.servingType}/>
      </div>
    );
  }
}
