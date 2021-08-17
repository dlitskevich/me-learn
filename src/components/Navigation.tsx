import firebase from 'firebase';
import React from 'react';

import { NavLink } from 'react-router-dom';
import { AuthButton } from './AuthButton';

export const Navigation = () => (

  <nav className="navbar nav-pills">
    <ul className="nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
      </li>
    </ul>
    <div className="nav-item d-flex">
      <AuthButton />
    </div>
  </nav>
);
