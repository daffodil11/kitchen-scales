var Enum = require('enum');

var Weights = new Enum([
  "Gram",
  "Kilogram",
  "Ounce",
  "Pound",
  "Stone"
], {ignoreCase: true});

var weightValues = {
  Weights.Gram : 1,
  Weights.Kilogram : 1000,
  Weights.Ounce : 28.3495,
  Weights.Pound : 453.592,
  Weights.Stone : 6350.29
}

module.exports = {
  neutraliseWeight : function (weight_unit, quantity) {
    return weightValues[weight_unit]*quantity;
  },
  convertWeight : function (target_weight_unit, quantity) {
    return quantity / weightValues[target_weight_unit];
  }
};
