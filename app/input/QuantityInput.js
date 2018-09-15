var React = require('react');
var PropTypes = require('prop-types');

var QuantityInput = function (props) {
  return (
    <form className="quantity">
      <label htmlFor="quantityInput">{'Quantity: '}</label>
      <input
        id="quantityInput"
        type="text"
        autoComplete="off"
        value={props.quantity}
        onChange={props.onChange} />
    </form>
  );
};
QuantityInput.propTypes = {
  quantity : PropTypes.number,
  onChange : PropTypes.func.isRequired
};
QuantityInput.defaultProps = {
  quantity : 1
}

module.exports = QuantityInput;
