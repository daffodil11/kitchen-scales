var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');
var Ingredient = require('./Ingredient');
var YieldSetter = require('./YieldSetter');
var unitValues = require('../utils/units').unitValues;

class KitchenScales extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      unitFamily : "metric",
      recipeYield : props.recipeYield,
      ingredients : props.ingredients.map((item) => {
        return ({
          ingredient : item.ingredient,
          quantity : this.gPerServing(item.quantity, item.unit, props.recipeYield)
        })
      })
    }
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleYieldChange = this.handleYieldChange.bind(this);
  }
  handleUnitChange (selectedUnitFamily) {
    this.setState({
      unitFamily : selectedUnitFamily
    });
  }
  handleYieldChange (event) {
    var newYield = parseInt(event.target.value);
    if (Number.isInteger(newYield)) {
      this.setState({
        recipeYield : newYield
      });
    }
  }
  gPerServing (quantity, unit, recipeYield) {
    return quantity*unitValues[unit.toString()]/recipeYield;
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.ingredients.map(function(item, index) {
            return <Ingredient
              key={index}
              unitFamily={this.state.unitFamily}
              quantity={item.quantity}
              ingredient={item.ingredient}
              recipeYield={this.state.recipeYield} />
          }.bind(this))}
        </ul>
        <UnitSelector
          selected={this.state.unitFamily}
          onChange={this.handleUnitChange}/>
        <YieldSetter
          recipeYield={this.state.recipeYield}
          onChange={this.handleYieldChange}/>
      </div>
    )
  }
}
KitchenScales.propTypes = {
  ingredients : PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeYield : PropTypes.number
};
KitchenScales.defaultProps = {
  recipeYield : 1
};

module.exports = KitchenScales;
