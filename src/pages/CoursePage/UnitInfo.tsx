import React from 'react';
import { NavLink } from 'react-router-dom';
import { IUnitInfo } from '../../types/IUnitInfo';

export const UnitInfo = ({ title, progress, link }:IUnitInfo) => (
  <NavLink to={link} className="course-info">
    <div className="container d-flex align-text-bottom">
      <span>{title}</span>
      <span className="ms-auto ">
        {`${progress} %`}
      </span>
    </div>
  </NavLink>
);

UnitInfo.defaultProps = {
  progress: 0,
};
