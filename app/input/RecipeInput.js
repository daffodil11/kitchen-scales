var React = require('react');
var WeightUnit = require('../utils/units').WeightUnit;
var IngredientInput = require('./IngredientInput');

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: [{ingredient: '',
      unit: WeightUnit.Gram,
      quantity: 1}]
    }
  }

  render () {
    return <IngredientInput />
  }
}

module.exports = Input;
