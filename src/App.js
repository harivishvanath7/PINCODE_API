import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostalCodeForm from './PostalCodeForm';
import LocationInfo from './LocationInfo';
import './App.css';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (postalCode) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
      setLocationData({
        country: response.data.country,
        state: response.data.state,
        placeName: response.data.places[0]['place name'],
      });
    } catch (error) {
      setError('Error fetching location information');
    } finally {
      setLoading(false);
    }
  };

  const clearInfo = () => {
    setLocationData(null);
    setError(null);
  };

  return (
    <div>
      <h1>Postal Code Information App</h1>
      <PostalCodeForm onSubmit={fetchData} onClear={clearInfo} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <LocationInfo locationData={locationData} clearInfo={clearInfo} />
    </div>
  );
};

export default App;


