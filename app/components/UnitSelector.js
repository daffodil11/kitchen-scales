var React = require('react');
var PropTypes = require('prop-types');

class UnitSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metric: true,
      imperial: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    event.preventDefault();
    var inputId = event.target.id;
    console.log(inputId);
    this.setState(function () {
      return {
        metric: (inputId==="metric"),
        imperial: (inputId==="imperial")
      }
    })
    this.props.onChange(this.state.metric);
  }
  render() {
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
                  checked={this.state.metric}
                  onChange={this.handleInputChange}/>
              </label>
            </div>
            <div>
              <label htmlFor="imperial">
                Imperial
                <input
                  type="radio"
                  id="imperial"
                  name="unit"
                  checked={this.state.imperial}
                  onChange={this.handleInputChange} />
              </label>
            </div>
          </legend>
        </fieldset>
      </form>
    )
  }
}
UnitSelector.propTypes = {
  onChange : PropTypes.func.isRequired
}

module.exports = UnitSelector;
