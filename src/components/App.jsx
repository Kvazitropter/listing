import React from 'react';
import Listing from './Listing.jsx';
import jsonData from '../assets/etsy.js';

const data = JSON.parse(jsonData);

const App = () => (
  <Listing items={data} />
);

export default App;
