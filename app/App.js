var React = require('react');
var PropTypes = require('prop-types');
var KitchenScales = require('./components/KitchenScales');

var App = function (props) {
  return (
    <div>
      <p>Input component to go here!</p>
      <KitchenScales ingredients={props.ingredients} recipeYield={props.recipeYield} />
    </div>
  );
}
App.propTypes = {
  ingredients : PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeYield : PropTypes.number
};
App.defaultProps = {
  recipeYield : 1
};

module.exports = App;
