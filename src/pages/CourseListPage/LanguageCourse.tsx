import React from 'react';
import { ICourseInfo } from '../../types/ICourseInfo';
import { CourseInfo } from './CourseInfo';
import './index.css';

interface Props{
  language:string,
  data:ICourseInfo[]
}

export const LanguageCourse = ({ language, data }:Props) => (
  <div>
    <h1>{language.charAt(0).toUpperCase() + language.substring(1)}</h1>
    <div>
      { data.map((el, i) => <CourseInfo key={`info_${language + i}`} id={el.id} language={language} title={el.title} filename={el.filename} total={el.total} progress={el.progress} />)}
    </div>
  </div>

);
