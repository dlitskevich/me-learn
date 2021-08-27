import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { IPhraseInfo } from '../../types/IPhraseInfo';
import { PhraseInfo } from './PhraseInfo';
import './index.css';
import { AsyncList } from '../../components/AsyncList';

interface Params{
  courseName:string,
  language:string,
  unit:string
}

export const UnitPage = () => {
  const { language, courseName, unit } = useParams<Params>();
  return (
    <div className="container pb-1">
      <h1>{unit.charAt(0).toUpperCase() + unit.substring(1).replace(/-/g, ' ')}</h1>
      <NavLink to={`/train/${language}/${courseName}/${unit}`}>
        <h2>Train Speech</h2>
      </NavLink>
      <div className="phrase-info-container">
        <AsyncList<IPhraseInfo> get={() => getUnitInfoList(language, courseName, unit)} renderItem={renderPhraseInfo} />
      </div>
    </div>
  );
};

const renderPhraseInfo = (el:IPhraseInfo, i:number) => <PhraseInfo key={`lang_courses_${i}`} phrase={el.phrase} progress={el.progress ? el.progress : 0} />;

const getUnitInfoList = (language:string, courseName:string, unit:string) => {
  const name = `${language}_${courseName}_${unit}`;
  if (!localStorage.getItem(name)) {
    return import(`../../data/${language}/${courseName}/${unit}`).then((info) => {
      console.log(info);
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};
