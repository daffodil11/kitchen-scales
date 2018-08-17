var React = require('react');
var PropTypes = require('prop-types');

var UnitSelector = function (props) {
  return (
    <form>
      <fieldset>
        <legend>
          <div>
            <label htmlFor="metric">
              Metric
              <input
                type="radio"
                id="metric"
                name="unit"
                checked={props.selected==="metric"}
                onChange={props.onChange.bind(null, "metric")}/>
            </label>
          </div>
          <div>
            <label htmlFor="imperial">
              Imperial
              <input
                type="radio"
                id="imperial"
                name="unit"
                checked={props.selected==="imperial"}
                onChange={props.onChange.bind(null, "imperial")} />
            </label>
          </div>
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
