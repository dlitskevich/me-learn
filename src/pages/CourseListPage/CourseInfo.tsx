import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICourseInfo } from '../../types/ICourseInfo';

export const CourseInfo = ({ title, progress, link }:ICourseInfo) => (
  <NavLink to={link}>
    <div className="container d-flex">
      <div>{title}</div>
      {progress}
    </div>
  </NavLink>
);

CourseInfo.defaultProps = {
  progress: 0,
};
