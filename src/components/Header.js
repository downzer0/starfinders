import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header role="banner">
      <div className="has-flex">
        <div className="is-not-flexed">
          <h1>Starfinder DM Tools</h1>
        </div>
        <div className="is-flexed">
          <div className="version">v0.1.0</div>
        </div>
      </div>
    </header>
  )
}

export default Header;