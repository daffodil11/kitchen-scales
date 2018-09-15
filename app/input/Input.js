var React = require('react');
var WeightUnit = require('../utils/units').WeightUnit;

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.handle = this.handle.bind(this);
  }

  handle (event) {
    console.log(event);
  }

  render () {
    return (
      <div>
        <IngredientInput
          ingredient={this.props.recipeIngredient.ingredient}
          onChange={this.handle}
          />
        <UnitInput
          unit={this.props.recipeIngredient.unit}
          onChange={this.handle}
          />
        <QuantityInput
          quantity={this.props.recipeIngredient.quantity}
          onChange={this.handle}
          />
      </div>
    )
  }
}
Input.propTypes = {
  recipeIngredient : PropTypes.object,
  onChange : PropTypes.func.isRequired
};

module.exports = Input;
