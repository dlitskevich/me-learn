import React from 'react';
import { NavLink } from 'react-router-dom';
import { getColor } from '../../services/color';
import { ICourseInfo } from '../../types/ICourseInfo';

export const CourseInfo = ({ title, filename, language, total, progress }:ICourseInfo) => (
  <NavLink to={`courses/${language}/${filename}`} className="course-info container d-flex align-text-bottom " style={{ borderColor: getColor((progress || 0) / total) }}>
    <span>{title}</span>
    <span className="ms-auto">
      {`${progress}/${total}`}
    </span>
  </NavLink>
);

CourseInfo.defaultProps = {
  progress: 0,
};
