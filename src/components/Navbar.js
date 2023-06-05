// Navbar.js

import React from 'react';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">My eCommerce</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home- Novedades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart ({cartItemCount})
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;