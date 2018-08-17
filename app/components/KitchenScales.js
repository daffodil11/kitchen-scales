var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');

class KitchenScales extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      unitFamily : "metric"
    }
    this.handleUnitChange = this.handleUnitChange.bind(this);
  }
  handleUnitChange (selectedUnitFamily) {
    console.log(selectedUnitFamily);
    this.setState({
      unitFamily : selectedUnitFamily
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.ingredients.map(function(item, index) {
            return <li key={index}>{item.quantity+item.unit+' of '+item.ingredient}</li>
          })}
        </ul>
        <UnitSelector selected={this.state.unitFamily} onChange={this.handleUnitChange}/>
      </div>
    )
  }
}
KitchenScales.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = KitchenScales;
