import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 4.570868,
    lng: -74.297333
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDcLyEIxDe_1KBGHxXnqeX8jHf4tDRAwvY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}
