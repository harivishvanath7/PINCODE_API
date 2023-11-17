import React from 'react';

const LocationInfo = ({ locationData, clearInfo }) => {
  if (!locationData) {
    return null;
  }

  const { country, state, placeName } = locationData;

  return (
    <div>
      <h2>Location Information</h2>
      <p>Country: {country}</p>
      <p>State: {state}</p>
      <p>Place Name: {placeName}</p>
      <button onClick={clearInfo}>Clear Information</button>
    </div>
  );
};

export default LocationInfo;
