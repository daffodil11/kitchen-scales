var React = require('react');

class UnitSelector extends React.Component {
  constructor(props) {
    this.state = {
      metric: true,
      imperial: false
    }
  }
  render() {
    return (
      <form>
        <fieldset>
          <legend>
            <div>
              <input type="radio" id="metric" name="unit" {this.state.metric && checked}>
                <label htmlFor="metric">Metric</label>
              </input>
            </div>
            <div>
              <input type="radio" id="imperial" name="unit" {this.state.imperial && checked}>
                <label htmlFor="imperial">Imperial</label>
              </input>
            </div>
          </legend>
        </fieldset>
      </form>
    )
  }
}
