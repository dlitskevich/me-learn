import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsyncData } from '../../hooks/useAsyncData';
import { IPhraseInfo } from '../../types/IPhraseInfo';
import { updateUnitInfo } from '../CoursePage';
import { Speech } from '../SpeechModule/index';

type Params ={
  courseName:string,
  language:string,
  unit:string
}

// LearnPage
export const LearnPhrasePage = () => {
  const { language, courseName, unit } = useParams<Params>();
  const { data, reload } = useAsyncData<IPhraseInfo>(() => getPhrase({ language, courseName, unit }));

  if (data) {
    return (
      <Speech phrase={data.phrase} refresh={reload} onSuccess={(success) => updateProgress({ success, phrase: data.phrase, language, courseName, unit })} />
    );
  }
  return <span>No data</span>;
};

type Args = Params

const getPhrase = ({ language, courseName, unit }:Args) => getPhraseList({ language, courseName, unit })
  .then((phrases) => phrases.find((e) => !e.progress));

const getPhraseList = ({ language, courseName, unit }:Args) => {
  const name = `${language}_${courseName}_${unit}`;
  if (!localStorage.getItem(name)) {
    return import(`../../data/${language}/${courseName}/${unit}`).then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};

const updateProgress = ({ phrase, language, courseName, unit, success }:{phrase:string, success:boolean }&Args) => {
  if (!success) {
    return Promise.resolve();
  }
  const name = `${language}_${courseName}_${unit}`;
  const phrases = getPhraseList({ language, courseName, unit });
  return phrases.then((info) => {
    const id = info.findIndex((e) => e.phrase === phrase);
    const updated = info;
    updated[id].progress = 100;
    localStorage.setItem(name, JSON.stringify(updated.sort((a, b) => a.progress - b.progress)));
  }).then(() => updateUnitInfo(language, courseName, unit));
};

// const updateProgressUnit = (language, courseName, unit) => {
//   const name = `info_${language}_${courseName}`;
//   const phrases = getPhraseList({ language, courseName, unit });
//   return phrases.then((info) => {
//     const id = info.findIndex((e) => e.unit === unit);
//     const updated = info;
//     updated[id].progress = 100;
//     localStorage.setItem(name, JSON.stringify(updated));
//   });
// };
