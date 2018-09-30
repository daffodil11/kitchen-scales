var React = require('react');
var PropTypes = require('prop-types');
var WeightUnit = require('../utils/units').WeightUnit;
var weightUnitValues = require('../utils/units').weightUnitValues;
var weightUnitAbbreviations = require('../utils/units').weightUnitAbbreviations;
var VolumeUnit = require('../utils/units').VolumeUnit;
var volumeUnitValues = require('../utils/units').volumeUnitValues;
var volumeUnitAbbreviations = require('../utils/units').volumeUnitAbbreviations;


var Ingredient = function (props) {
  // if (props.unitType==="Weight") {
  //   if (props.unitFamily==="metric") {
  //     if (props.quantity >= 1000) {
  //       var unit = WeightUnit.Kilogram;
  //     } else {
  //       var unit = WeightUnit.Gram;
  //     }
  //   } else {
  //     var unit = WeightUnit.Ounce;
  //   }
  //   var unitAbbr = unitAbbreviations[unit.toString()];
  //   var quantity = Math.round((props.quantity/unitValues[unit.toString()])*props.recipeYield);
  // } else {
  //   if (props.quantity*props.recipeYield < 30) {
  //     console.log(props.quantity);
  //     var unit = VolumeUnit.Teaspoon;
  //   } else if (props.unitFamily==="metric") {
  //     if (props.quantity >= 1000) {
  //       var unit = VolumeUnit.Litre;
  //     } else {
  //       var unit = VolumeUnit.Millilitre;
  //     }
  //   } else {
  //     var unit = VolumeUnit.FluidOunce;
  //   }
  //   var unitAbbr = volumeUnitAbbreviations[unit.toString()];
  //   var quantity = Math.round((props.quantity/volumeUnitValues[unit.toString()])*props.recipeYield);
  // }
  var abbreviations = Object.assign(weightUnitAbbreviations, volumeUnitAbbreviations);
  var values = Object.assign(weightUnitValues, volumeUnitValues);
  var unitAbbr = abbreviations[props.unit];
  var quantity = Math.round(props.quantity/values[props.unit]*props.recipeYield);

  return (
    <li className="ingredient">{quantity}{unitAbbr} of {props.ingredient}</li>
  );
}
Ingredient.propTypes = {
  unit : PropTypes.string.isRequired,
  quantity : PropTypes.number.isRequired,
  ingredient : PropTypes.string.isRequired,
  recipeYield : PropTypes.number
};
Ingredient.defaultProps = {
  recipeYield : 1
};

module.exports = Ingredient;
