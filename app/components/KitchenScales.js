var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');
var Ingredient = require('./Ingredient');
var YieldSetter = require('./YieldSetter');
var WeightUnit = require('../utils/units').WeightUnit;
var unitValues = require('../utils/units').unitValues;
var volumeUnitValues = require('../utils/units').volumeUnitValues;

class KitchenScales extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      unitFamily : "metric",
      recipeYield : props.recipeYield,
      ingredients : props.ingredients.map((item) => {
        var ingredientUnitType = WeightUnit.enums.some(function (unitEnum) {
          return (unitEnum == item.unit);
        }) ? "Weight" : "Volume";
        return ({
          ingredient : item.ingredient,
          unitType : ingredientUnitType,
          quantity : this.metricUnitPerServing(item.quantity, item.unit, props.recipeYield, ingredientUnitType)
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
  metricUnitPerServing (quantity, unit, recipeYield, unitType) {
    if (unitType==="Weight") {
      return quantity*unitValues[unit.toString()]/recipeYield;
    } else {
      return quantity*volumeUnitValues[unit.toString()]/recipeYield;
    }
  }
  render () {
    return (
      <div className="row">
        <div className="column">
          <ul className="ingredient-list">
            {this.state.ingredients.map(function(item, index) {
              return <Ingredient
                key={index}
                unitFamily={this.state.unitFamily}
                unitType={item.unitType}
                quantity={item.quantity}
                ingredient={item.ingredient}
                recipeYield={this.state.recipeYield} />
            }.bind(this))}
          </ul>
        </div>
        <div className="column">
          <UnitSelector
            selected={this.state.unitFamily}
            onChange={this.handleUnitChange}/>
          <YieldSetter
            recipeYield={this.state.recipeYield}
            onChange={this.handleYieldChange}/>
        </div>
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
