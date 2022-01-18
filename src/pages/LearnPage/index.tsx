import React from 'react';
import { useAsyncData } from '../../hooks/useAsyncData';
import { Learn } from './Learn';

interface Verb{
  verb: string,
  verb2: string,
  verb3: string,
  gerund: string,
  '1st'?: string,
  '2nd'?: string,
  '3rd'?: string,
  '3rdPret'?: string
}
const getVerbsList : () => Promise<Verb[]> = () => {
  const name = 'en_verbs';
  if (!localStorage.getItem(name)) {
    return import('../../data/enVerb.json').then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default.data;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]').data);
};

export const LearnPage = () => {
  const { data, reload } = useAsyncData<string>(() => getData());
  return (
    <Learn word={data || ''} refresh={reload} />
  );
};

// const verbs:Verb = JSON.parse(localStorage.getItem('en_verbs') || '[]').data;

const getData = () => getVerbsList().then((verbs) => verbs[Math.floor(verbs.length * Math.random())].verb);
