import React from 'react';
import Item from './Item';

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => item.state === 'active' && (
        <Item key={item.listing_id} data={item} />
      ))}
    </div>
  );
};

export default Listing;
