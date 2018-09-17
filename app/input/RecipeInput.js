var React = require('react');
var WeightUnit = require('../utils/units').WeightUnit;
var Input = require('./Input');

class RecipeInput extends React.Component {
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

  handleUnitChange (selectedUnitFamily) {
    //Todo: Make this make sense.
    this.setState((state, props) => {
      let temp = state;
      temp[0] = {ingredient: state[0].ingredient,
                  unit: selectedUnitFamily,
                  quantity: state[0].quantity};
      return temp;
    });
  }

  handleQuantityChange (event) {
    var newQuantity = parseInt(event.target.value);
    if (Number.isInteger(newQuantity)) {
      //Update the state
    }
  }

  render () {
    return <Input
      recipeIngredient={this.state.ingredients[0]}
      onChange={this.handle}
      />
  }
}

module.exports = RecipeInput;
