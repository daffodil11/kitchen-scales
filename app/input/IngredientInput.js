var React = require('react');
var PropTypes = require('prop-types');

var IngredientInput = function (props) {
  return (
    <form className="ingredient">
      <label htmlFor="ingredientInput">{'Ingredient: '}</label>
      <input
        id="ingredientInput"
        type="text"
        autoComplete="off"
        value={props.ingredient}
        onChange={props.onChange} />
    </form>
  );
};
IngredientInput.propTypes = {
  ingredient : PropTypes.number,
  onChange : PropTypes.func.isRequired
};
IngredientInput.defaultProps = {
  ingredient : 1
}

module.exports = IngredientInput;
