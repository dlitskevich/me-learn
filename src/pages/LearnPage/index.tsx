import React, { useState } from 'react';
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

export const LearnPage = () => {
  const [state, setState] = useState(false);
  const refresh = () => {
    setState(!state);
  };
  return (
    <Learn word={getData().verb} refresh={refresh} />
  );
};

const verbs:Verb[] = JSON.parse(localStorage.getItem('en_verbs') || '[]');

const getData = () => verbs[Math.floor(verbs.length * Math.random())];
