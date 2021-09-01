import React from 'react';

// eslint-disable-next-line no-unused-vars
export const Navigation = ({ types, setType }:{types:string[], setType:(v:string)=>void}) => (

  <nav className="navbar nav-pills sticky-top">
    <div className="container-fluid">
      <ul className="nav">
        {types.map((e) => (
          <li key={e} className="nav-item">
            <button type="button" className="nav-link" onClick={() => setType(e)}>
              {e}
            </button>
          </li>

        ))}
      </ul>
    </div>
  </nav>
);
