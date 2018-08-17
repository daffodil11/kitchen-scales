var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');

class KitchenScales extends React.Component {
  constructor (props) {
    super(props);
    this.handleUnitChange = this.handleUnitChange.bind(this);
  }
  handleUnitChange (metric) {
    console.log(metric ? "Metric" : "Imperial");
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.ingredients.map(function(item, index) {
            return <li key={index}>{item.quantity+item.unit+' of '+item.ingredient}</li>
          })}
        </ul>
        <UnitSelector onChange={this.handleUnitChange}/>
      </div>
    )
  }
}
KitchenScales.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = KitchenScales;
