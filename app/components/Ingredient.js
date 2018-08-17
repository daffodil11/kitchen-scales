var React = require('react');
var PropTypes = require('prop-types');
var WeightUnit = require('../utils/units').WeightUnit;
var unitValues = require('../utils/units').unitValues;
var unitAbbreviations = require('../utils/units').unitAbbreviations;

var Ingredient = function (props) {
  var unitFamily = props.unitFamily;
  if (unitFamily==="metric") {
    if (props.quantity >= 1000) {
      var unit = WeightUnit.Kilogram;
    } else {
      var unit = WeightUnit.Gram;
    }
  } else {
    var unit = WeightUnit.Ounce;
  }
  var unitAbbr = unitAbbreviations[unit.toString()];
  var quantity = Math.round(props.quantity/unitValues[unit.toString()]);

  return (
    <li>{quantity}{unitAbbr} of {props.ingredient}</li>
  );
}
Ingredient.propTypes = {
  unitFamily : PropTypes.string.isRequired,
  quantity : PropTypes.number.isRequired,
  ingredient : PropTypes.string.isRequired
}

module.exports = Ingredient;
