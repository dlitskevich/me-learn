import React, { useState } from 'react';
import { Speech } from './Speech';

const phrases = [
  'I like playing chess',
  'He likes playing dodge ball',
];

export const TrainPage = () => {
  const [state, setState] = useState(0);
  const refresh = () => {
    setState(state + 1);
  };
  return (
    <Speech phrase={getPhrase()} refresh={refresh} />
  );
};

const getPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
