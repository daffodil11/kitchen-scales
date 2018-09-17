var React = require('react');
var PropTypes = require('prop-types');
var WeightUnit = require('../utils/units').WeightUnit;

var UnitInput = function (props) {
  return (
    <form className="unit">
      <label htmlFor="UnitInput">{'Unit: '}</label>
      <select onChange={props.onChange}>
        <option value={WeightUnit.Gram}>Grams</option>
        <option value={WeightUnit.Kilogram}>Kilograms</option>
      </select>
    </form>
  );
};
UnitInput.propTypes = {
  unit : PropTypes.object,
  onChange : PropTypes.func.isRequired
};
UnitInput.defaultProps = {
  unit : WeightUnit.Gram
}

module.exports = UnitInput;
