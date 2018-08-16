var Enum = require('enum');

var WeightUnits = new Enum([
  "Gram",
  "Kilogram",
  "Ounce",
  "Pound",
  "Stone"
], {ignoreCase: true});

var unitValues = {
  Weights.Gram : 1,
  Weights.Kilogram : 1000,
  Weights.Ounce : 28.3495,
  Weights.Pound : 453.592,
  Weights.Stone : 6350.29
}

module.exports = {
  WeightUnits,
  unitValues
};
