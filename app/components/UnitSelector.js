var React = require('react');
var PropTypes = require('prop-types');

var UnitSelector = function (props) {
  return (
    <form className="unit-selection">
      <div>
        <label htmlFor="weight-unit-selector">Weight Unit: </label>
        <select id="weight-unit-selector">
          <option selected={props.weight_selection==="Gram"} value="Gram">Grams & Kilograms</option>
          <option selected={props.weight_selection==="Ounce"} value="Ounce">Ounces & Pounds</option>
        </select>
      </div>
      <div>
        <label htmlFor="volume-unit-selector">Volume Unit: </label>
        <select id="volume-unit-selector">
          <option selected={props.volume_selection==="Millilitre"} value="Millilitre">Millilitres & Litres</option>
          <option selected={props.volume_selection==="FluidOunce"} value="FluidOunce">Fluid Ounces</option>
          <option selected={props.volume_selection==="CupUS"} value="CupUS">US Cups</option>
        </select>
      </div>
    </form>
  )
}
UnitSelector.propTypes = {
  weight_selection : PropTypes.string.isRequired,
  volume_selection : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
}
UnitSelector.defaultProps = {
  weight_selection : "Gram",
  volume_selection : "Millilitre"
}

module.exports = UnitSelector;
