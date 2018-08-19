var React = require('react');
var PropTypes = require('prop-types');

var YieldSetter = function (props) {
  return (
    <form>
      <input
        id="yieldInput"
        type="text"
        autoComplete="off"
        value={props.recipeYield}
        onChange={props.onChange} />
      <label htmlFor="yieldInput">{props.label}</label>
    </form>
  );
};
YieldSetter.propTypes = {
  recipeYield : PropTypes.number,
  onChange : PropTypes.func.isRequired,
  label : PropTypes.string
};
YieldSetter.defaultProps = {
  recipeYield : 1,
  label : "servings"
}

module.exports = YieldSetter;