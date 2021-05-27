import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
/* import useGoogleAddress from '../hooks/useGoogleAddress'; */
import '../styles/components/Success.css';

export default function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en tres dias a tu dirrecion</span>
        <div className="Success-map">
          <Map/>
        </div>
      </div>
    </div>
  );
}
