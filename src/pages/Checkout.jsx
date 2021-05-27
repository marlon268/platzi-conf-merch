import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

function getRandomInt(min = 0, max = 1000000) {
  return Math.floor(Math.random() * (max - min)) + min;
} 
export default function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  /* const handleRemove = (product) => () => {
    removeFromCart(product);
  }; */
  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
 };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de pedidos: </h3>
        ) : (
          <h3>Sin pedidos...</h3>
        )}
        {cart.map((item, i) => (
          <div key={getRandomInt()} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}
