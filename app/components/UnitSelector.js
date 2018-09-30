var React = require('react');
var PropTypes = require('prop-types');

var UnitSelector = function (props) {
  return (
    <form className="unit-selection">
      <div>
        <label htmlFor="weight-unit-selector">Weight Unit: </label>
        <select
          id="weight-unit-selector"
          value={props.weightSelection}
          onChange={props.onChange.bind(null, "Weight")}>
          <option
            value="Gram">
            Grams & Kilograms
          </option>
          <option
            value="Ounce">
            Ounces & Pounds
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="volume-unit-selector">Volume Unit: </label>
        <select id="volume-unit-selector" value={props.volumeSelection} onChange={props.onChange.bind(null, "Volume")}>
          <option value="Millilitre">Millilitres & Litres</option>
          <option value="FluidOunce">Fluid Ounces</option>
          <option value="CupUS">US Cups</option>
        </select>
      </div>
    </form>
  )
}
UnitSelector.propTypes = {
  weightSelection : PropTypes.string.isRequired,
  volumeSelection : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
}
UnitSelector.defaultProps = {
  weightSelection : "Gram",
  volumeSelection : "Millilitre"
}

module.exports = UnitSelector;
