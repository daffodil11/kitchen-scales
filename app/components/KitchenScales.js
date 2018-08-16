var React = require('react');
var PropTypes = require('prop-types');

class KitchenScales extends React.Component {
  render () {
    return (
      <ul>
        {this.props.ingredients.map(function(item) {
          return <li>{item.quantity+item.unit+' of '+item.ingredient}</li>
        })}
      </ul>
    )
  }
}
KitchenScales.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = KitchenScales;
