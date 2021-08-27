import React from 'react';
import { useParams } from 'react-router-dom';
import { IUnitInfo } from '../../types/IUnitInfo';
import { UnitInfo } from './UnitInfo';
import { AsyncList } from '../../components/AsyncList';
import { updateLanguageInfo } from '../CourseListPage';
import './index.css';

interface Params{
  courseName:string,
  language:string
}

export const CoursePage = () => {
  const { courseName, language } = useParams<Params>();
  return (
    <div className="container pb-1">
      <h1>{courseName.charAt(0).toUpperCase() + courseName.substring(1).replace(/-/g, ' ')}</h1>
      <div className="unit-info-container">
        <AsyncList<IUnitInfo> get={() => getUnitInfoList(language, courseName)} renderItem={renderUnitInfo} />
      </div>
    </div>

  );
};

const renderUnitInfo = (el:IUnitInfo) => <UnitInfo key={`lang_courses_${el.title}`} title={el.title} filename={el.filename} total={el.total} progress={el.progress || 0} />;

const getUnitInfoList = (language:string, courseName:string) => {
  const name = `info_${language}_${courseName}`;
  if (!localStorage.getItem(name)) {
    return import(`../../data/${language}/${courseName}/_info`).then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};

export const updateUnitInfo = (language:string, courseName:string, unitName:string) => {
  const name = `info_${language}_${courseName}`;
  const data = getUnitInfoList(language, courseName);
  return data.then((info) => {
    const unit = info.find((e) => e.filename === unitName);

    if (unit) {
      unit.progress = unit.progress ? unit.progress + 1 : 1;
      localStorage.setItem(name, JSON.stringify(info));
    }
  }).then(() => updateLanguageInfo(language, courseName));
};
