import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICourseInfo } from '../../types/ICourseInfo';

export const CourseInfo = ({ title, progress, filename, language }:ICourseInfo) => (
  <NavLink to={`courses/${language}/${filename}`} className="course-info container d-flex align-text-bottom ">
    <span>{title}</span>
    <span className="ms-auto">
      {`${progress} %`}
    </span>
  </NavLink>
);

CourseInfo.defaultProps = {
  progress: 0,
};
