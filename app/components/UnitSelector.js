var React = require('react');
var PropTypes = require('prop-types');

var UnitSelector = function (props) {
  return (
    <form className="unit-selection">
      <div>
        <label htmlFor="weight-unit-selector">Weight Unit: </label>
        <select id="weight-unit-selector">
          <option selected value="Gram">Grams & Kilograms</option>
          <option value="Ounce">Ounces & Pounds</option>
        </select>
      </div>
      <div>
        <label htmlFor="volume-unit-selector">Volume Unit: </label>
        <select id="volume-unit-selector">
          <option selected value="Millilitre">Millilitres & Litres</option>
          <option value="FluidOunce">Fluid Ounces</option>
          <option value="CupUS">US Cups</option>
        </select>
      </div>
    </form>
  )
}
UnitSelector.propTypes = {
  selected : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
}

module.exports = UnitSelector;
