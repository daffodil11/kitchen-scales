var React = require('react');
var PropTypes = require('prop-types');
var UnitSelector = require('./UnitSelector');
var Ingredient = require('./Ingredient');
var YieldSetter = require('./YieldSetter');
var WeightUnit = require('../utils/units').WeightUnit;
var VolumeUnit = require('../utils/units').VolumeUnit;
var weightUnitValues = require('../utils/units').weightUnitValues;
var volumeUnitValues = require('../utils/units').volumeUnitValues;

class KitchenScales extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      unitFamily : "metric",
      recipeYield : props.recipeYield,
      ingredients : props.ingredients.map((item) => {
        var wgt = WeightUnit.get(item.unit);
        var vol = VolumeUnit.get(item.unit);
        if (wgt) {
          var unit = wgt;
          var unitType = "Weight";
        } else if (vol) {
          var unit = vol;
          var unitType = "Volume";
        } else {
          throw "Invalid unit for ingredient "+item.ingredient;
        }
        //Use the some method of WeightUnit.enums to check if the ingredient is
        //of the type of any of the weight units. If not, it's volume.
        // var unitType = WeightUnit.enums.some(function (unitEnum) {
        //   return (unitEnum == item.unit);
        // }) ? "Weight" : "Volume";
        var unitValues = (unitType=="Weight") ? weightUnitValues : volumeUnitValues;
        return ({
          ingredient : item.ingredient,
          unitType : unitType,
          quantity : item.quantity*unitValues[unit.toString()]/props.recipeYield
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
  render () {
    return (
      <div className="ks-container">
        <div className="ks-column">
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
        <div className="ks-column">
          <UnitSelector
            selected={this.state.unitFamily}
            onChange={this.handleUnitChange}/>
          <YieldSetter
            recipeYield={this.state.recipeYield}
            onChange={this.handleYieldChange}
            label={this.props.servingType}/>
        </div>
      </div>
    )
  }
}
KitchenScales.propTypes = {
  ingredients : PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeYield : PropTypes.number,
  servingType : PropTypes.string
};
KitchenScales.defaultProps = {
  recipeYield : 1,
  servingType : "servings"
};

module.exports = KitchenScales;
