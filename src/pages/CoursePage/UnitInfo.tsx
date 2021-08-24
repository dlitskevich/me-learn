import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { IUnitInfo } from '../../types/IUnitInfo';

export const UnitInfo = ({ name, phrases, progress }:IUnitInfo) => {
  const { url } = useRouteMatch();
  return (
    <NavLink to={`${url}/${toLink(name)}`} className="unit-info container d-flex align-text-bottom">
      <span>{name}</span>
      <span className="ms-auto ">
        {`${progress || 0} %`}
      </span>
    </NavLink>
  );
};

UnitInfo.defaultProps = {
  progress: 0,
};

const toLink = (name:string) => name.toLowerCase().replace(' ', '-');
