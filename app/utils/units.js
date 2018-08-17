var Enum = require('enum');

var WeightUnit = new Enum([
  "Gram",
  "Kilogram",
  "Ounce",
  "Pound",
  "Stone"
], {ignoreCase: true});

var unitValues = {
  Gram : 1,
  Kilogram : 1000,
  Ounce : 28.3495,
  Pound : 453.592,
  Stone : 6350.29
}

module.exports = {
  WeightUnit,
  unitValues
};
