import React from 'react';
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

interface Verbs{
  _version:number,
  data:{[word:string]:Verb}
}

export const LearnPage = () => (
  <Learn word={getData()} />
);

const dict:Verbs = JSON.parse(localStorage.getItem('verbs') || '{}');

const getData = () => {
  console.log(Object.keys(dict.data)[2]);

  return Object.keys(dict.data)[Math.floor(100 * Math.random())];
};
