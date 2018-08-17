var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');
var Ingredient = require('./Ingredient');

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
            console.log(item);
            console.log(index);
            return <Ingredient
              key={index}
              liIndex={index}
              unitFamily={this.state.unitFamily}
              quantity={item.quantity}
              ingredient={item.ingredient} />
          }.bind(this))}
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
