import React from 'react';

import './Homepage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ACTION</h1>
            <span className="subtitle">BUY NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ARCADE</h1>
            <span className="subtitle">BUY NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">STRATEGY</h1>
            <span className="subtitle">BUY NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">CONSOLES</h1>
            <span className="subtitle">BUY NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">PC</h1>
            <span className="subtitle">BUY NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
