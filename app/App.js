var React = require('react');
var PropTypes = require('prop-types');
var RecipeInput = require('./input/RecipeInput');
var KitchenScales = require('./components/KitchenScales');

var App = function (props) {
  return (
    <div>
      <KitchenScales ingredients={props.ingredients} recipeYield={props.recipeYield} servingType={props.servingType}/>
    </div>
  );
}
App.propTypes = {
  ingredients : PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeYield : PropTypes.number,
  servingType : PropTypes.string
};
App.defaultProps = {
  recipeYield : 1,
  servingType : "servings"
};

module.exports = App;
