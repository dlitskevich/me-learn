import React from 'react';
import { useParams } from 'react-router-dom';
import { IUnitInfo } from '../../types/IUnitInfo';
import { UnitInfo } from './UnitInfo';
import './index.css';
import { AsyncList } from '../../components/AsyncList';

interface Params{
  courseName:string,
  language:string
}

export const CoursePage = () => {
  const { courseName, language } = useParams<Params>();
  return (
    <div className="container pb-1">
      <h1>{courseName.charAt(0).toUpperCase() + courseName.substring(1).replace(/-/g, ' ')}</h1>
      <div>
        <AsyncList<IUnitInfo> get={() => getUnitInfoList(language, courseName)} renderItem={renderUnitInfo} />
      </div>
    </div>

  );
};

const renderUnitInfo = (el:IUnitInfo) => <UnitInfo key={`lang_courses_${el.name}`} name={el.name} phrases={el.phrases} />;

const getUnitInfoList = (language:string, courseName:string) => {
  if (!localStorage.getItem(`info_${courseName}`)) {
    return import(`../../data/${language}/${courseName}`).then((info) => {
      localStorage.setItem(`info_${language}_${courseName}`, JSON.stringify(info.default.data));
      return info.default.data;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(`info_${language}_${courseName}`) || '[]'));
};
