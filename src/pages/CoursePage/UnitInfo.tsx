import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { IUnitInfo } from '../../types/IUnitInfo';

export const UnitInfo = ({ title, filename, progress }:IUnitInfo) => {
  const { url } = useRouteMatch();
  return (
    <NavLink to={`${url}/${filename}`} className="unit-info container d-flex align-text-bottom">
      <span>{title}</span>
      <span className="ms-auto ">
        {`${progress || 0} %`}
      </span>
    </NavLink>
  );
};

UnitInfo.defaultProps = {
  progress: 0,
};
