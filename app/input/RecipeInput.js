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
    this.handle = this.handle.bind(this);
  }

  handle (event) {
    console.log(event);
  }

  render () {
    return <IngredientInput
      recipeIngredient={this.state.ingredients[0]}
      onChange={this.handle}
      />
  }
}

module.exports = Input;
