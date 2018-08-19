var React = require('react');
var PropTypes = require('prop-types');

var UnitSelector = function (props) {
  return (
    <form className="unit-selection">
      <fieldset>
        <legend>
            <label htmlFor="metric">
              <input
                type="radio"
                id="metric"
                name="unit"
                checked={props.selected==="metric"}
                onChange={props.onChange.bind(null, "metric")}/>
              Metric
            </label>
            <label htmlFor="imperial">
              <input
                type="radio"
                id="imperial"
                name="unit"
                checked={props.selected==="imperial"}
                onChange={props.onChange.bind(null, "imperial")} />
              Imperial
            </label>
        </legend>
      </fieldset>
    </form>
  )
}
UnitSelector.propTypes = {
  selected : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
}

module.exports = UnitSelector;
