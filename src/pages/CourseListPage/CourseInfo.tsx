import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICourseInfo } from '../../types/ICourseInfo';

export const CourseInfo = ({ title, progress, link }:ICourseInfo) => (
  <NavLink to={`${link}`} className="course-info">
    <div className="container d-flex align-text-bottom">
      <span>{title}</span>
      <span className="ms-auto ">
        {`${progress} %`}
      </span>
    </div>
  </NavLink>
);

CourseInfo.defaultProps = {
  progress: 0,
};