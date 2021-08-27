import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { getColor } from '../../services/color';
import { IUnitInfo } from '../../types/IUnitInfo';

export const UnitInfo = ({ title, filename, total, progress }:IUnitInfo) => {
  const { url } = useRouteMatch();
  return (
    <NavLink to={`${url}/${filename}`} className="unit-info container d-flex align-text-bottom" style={{ borderColor: getColor((progress || 0) / total) }}>
      <span>{title}</span>
      <span className="ms-auto ">
        {`${progress}/${total}`}
      </span>
    </NavLink>
  );
};

UnitInfo.defaultProps = {
  progress: 0,
};
