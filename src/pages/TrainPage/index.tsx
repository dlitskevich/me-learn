import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsyncData } from '../../hooks/useAsyncData';
import { IPhraseInfo } from '../../types/IPhraseInfo';
import { Speech } from './Speech';

interface Params{
  courseName:string,
  language:string,
  unit:string
}

export const TrainPage = () => {
  const { language, courseName, unit } = useParams<Params>();
  const { data, reload } = useAsyncData<IPhraseInfo>(() => getPhrase(language, courseName, unit));

  if (data) {
    return (
      <Speech phrase={data.phrase} refresh={reload} />
    );
  }
  return <span>No data</span>;
};

const getPhrase = (language:string, courseName:string, unit:string) => getPhraseList(language, courseName, unit)
  .then((phrases) => phrases[Math.floor(Math.random() * phrases.length)]);

const getPhraseList = (language:string, courseName:string, unit:string) => {
  const name = `${language}_${courseName}_${unit}`;
  if (!localStorage.getItem(name)) {
    return import(`../../data/${language}/${courseName}/${unit}`).then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};
