var React = require('react');
var PropTypes = require('prop-types');
var WeightUnit = require('../utils/units').WeightUnit;
var unitValues = require('../utils/units').unitValues;

var Ingredient = function (props) {
  var unitFamily = props.unitFamily;
  if (unitFamily==="metric") {
    if (props.quantity > 1000) {
      var unit = WeightUnit.Kilogram;
      var quantity = props.quantity/1000;
    } else {
      var unit = WeightUnit.Gram;
      var quantity = props.quantity;
    }
  } else {
    var unit = WeightUnit.Ounce;
    var quantity = 42;
  }

  return (
    <li>{quantity}{unit.toString()} of {props.ingredient}</li>
  );
}
Ingredient.propTypes = {
  unitFamily : PropTypes.string.isRequired,
  quantity : PropTypes.number.isRequired,
  ingredient : PropTypes.string.isRequired
}

module.exports = Ingredient;
