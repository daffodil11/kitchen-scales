var React = require('react');
var PropTypes = require('prop-types');

var YieldSetter = function (props) {
  return (
    <form>
      <input
        id="yieldInput"
        type="text"
        autocomplete="off"
        value={props.recipeYield}
        onChange={props.handleChange} />
      <label htmlFor="yieldInput">{props.label}</label>
    </form>
  );
};
YieldSetter.propTypes = {
  recipeYield : PropTypes.number,
  handleChange : PropTypes.func.isRequired,
  label : PropTypes.string
};
YieldSetter.defaultProps = {
  recipeYield : 1
  label : "servings"
}

module.exports = YieldSetter;
