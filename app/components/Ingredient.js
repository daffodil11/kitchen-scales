var React = require('react');
var PropTypes = require('prop-types');
var WeightUnit = require('../utils/units').WeightUnit;
var unitValues = require('../utils/units').unitValues;
var unitAbbreviations = require('../utils/units').unitAbbreviations;
var VolumeUnit = require('../utils/units').VolumeUnit;
var volumeUnitValues = require('../utils/units').volumeUnitValues;
var volumeUnitAbbreviations = require('../utils/units').volumeUnitAbbreviations;


var Ingredient = function (props) {
  if (props.unitType==="Weight") {
    if (props.unitFamily==="metric") {
      if (props.quantity >= 1000) {
        var unit = WeightUnit.Kilogram;
      } else {
        var unit = WeightUnit.Gram;
      }
    } else {
      var unit = WeightUnit.Ounce;
    }
    var unitAbbr = unitAbbreviations[unit.toString()];
    var quantity = Math.round((props.quantity/unitValues[unit.toString()])*props.recipeYield);
  } else {
    if (props.unitFamily==="metric") {
      if (props.quantity >= 1000) {
        var unit = VolumeUnit.Litre;
      } else {
        var unit = VolumeUnit.Millilitre;
      }
    } else {
      var unit = VolumeUnit.FluidOunce;
    }
    var unitAbbr = volumeUnitAbbreviations[unit.toString()];
    var quantity = Math.round((props.quantity/volumeUnitValues[unit.toString()])*props.recipeYield);
  }

  return (
    <li>{quantity}{unitAbbr} of {props.ingredient}</li>
  );
}
Ingredient.propTypes = {
  unitFamily : PropTypes.string.isRequired,
  unitType : PropTypes.string.isRequired,
  quantity : PropTypes.number.isRequired,
  ingredient : PropTypes.string.isRequired,
  recipeYield : PropTypes.number
};
Ingredient.defaultProps = {
  recipeYield : 1
};

module.exports = Ingredient;
