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

var weightUnitValues = {
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

var weightUnitAbbreviations = {
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

var getUnit = function(selectedUnit, quantity) {
  console.log(selectedUnit);
  console.log(quantity);
  switch (selectedUnit) {
    case "Gram":
    case "Kilogram":
      if (quantity>1000) {
        return "Kilogram";
      } else {
        return "Gram";
      }
    case "Ounce":
    case "Pound":
      if (quantity>453) {
        return "Pound";
      } else {
        return "Ounce";
      }
    case "Teaspoon":
      return "Teaspoon";
    case "Tablespoon":
      return "Tablespoon";
    case "Litre":
    case "Millilitre":
      if (quantity>1000) {
        return "Litre";
      } else if (quantity<30) {
        return "Teaspoon";
      } else {
        return "Millilitre";
      }
    case "CupUS":
    case "FluidOunce":
      if (quantity>235) {
        return "CupUS";
      } else {
        return "FluidOunce";
      }
  }
}

module.exports = {
  WeightUnit,
  weightUnitValues,
  weightUnitAbbreviations,
  VolumeUnit,
  volumeUnitValues,
  volumeUnitAbbreviations,
  getUnit
};
