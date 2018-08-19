var Enum = require('enum');

var WeightUnit = new Enum([
  "Gram",
  "Kilogram",
  "Ounce",
  "Pound",
  "Stone"
], {ignoreCase: true});

var VolumeUnit = new Enum([
  "Millilitre",
  "Litre",
  "Teaspoon",
  "Tablespoon",
  "FluidOunce",
  "CupUS",
  "GallonUS"
])

var unitValues = {
  Gram : 1,
  Kilogram : 1000,
  Ounce : 28.3495,
  Pound : 453.592
};

var volumeUnitValues = {
  Millilitre : 1,
  Litre : 1000,
  Teaspoon : 5,
  Tablespoon : 15,
  FluidOunce : 29.5735,
  CupUS : 236.588,
  GallonUS : 3785.41
}

var unitAbbreviations = {
  Gram : "g",
  Kilogram : "kg",
  Ounce : "oz",
  Pound : "lb"
};

var volumeUnitAbbreviations = {
  Millilitre : "ml",
  Litre : "l",
  Teaspoon : "tsp",
  Tablespoon : "tbsp",
  FluidOunce : "fl oz",
  CupUS : " US cup(s)",
  GallonUS : " US gallon(s)"
}

module.exports = {
  WeightUnit,
  unitValues,
  unitAbbreviations,
  VolumeUnit,
  volumeUnitValues,
  volumeUnitAbbreviations
};
