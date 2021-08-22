import React from 'react';

import { NavLink } from 'react-router-dom';
import { AuthButton } from './AuthButton';

export const Navigation = () => (

  <nav className="navbar nav-pills sticky-top">
    <div className="container-fluid">
      <ul className="nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/learn" className="nav-link" activeClassName="active">Learn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/words" className="nav-link" activeClassName="active">Words</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/train" className="nav-link" activeClassName="active">Train</NavLink>
        </li>
      </ul>
      <ul className="nav navbar-right">
        <li className="nav-item">
          <AuthButton />
        </li>
      </ul>
    </div>
  </nav>
);
