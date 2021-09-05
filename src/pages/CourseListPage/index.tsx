import React from 'react';
import { ICourseInfo } from '../../types/ICourseInfo';
import { LanguageCourse } from './LanguageCourse';
import { AsyncList } from '../../components/AsyncList';
import './index.css';

type ILanguageCourse = {
  id:number,
  language:string,
  data:ICourseInfo[]
}

export const CourseListPage = () => <AsyncList<ILanguageCourse> get={getLanguageCourseList} renderItem={renderLanguageCourse} />;

const renderLanguageCourse = (el:ILanguageCourse) => <LanguageCourse key={`lang_courses_${el.language}`} language={el.language} data={el.data} />;

const getLanguageCourseList : () => Promise<ILanguageCourse[]> = () => {
  const name = 'info_language';
  if (!localStorage.getItem(name)) {
    return import('../../data/courses.json').then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};

export const updateLanguageInfo = (language:string, filename:string) => {
  const name = 'info_language';
  const data = getLanguageCourseList();
  return data.then((info) => {
    const langInfo = info.find((e) => e.language === language);
    if (langInfo) {
      const courseInfo = langInfo.data.find((e) => e.filename === filename);
      if (courseInfo) {
        courseInfo.progress = courseInfo.progress ? courseInfo.progress + 1 : 1;
        localStorage.setItem(name, JSON.stringify(info));
      }
    }
  });
};
