import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  console.log(size);
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
