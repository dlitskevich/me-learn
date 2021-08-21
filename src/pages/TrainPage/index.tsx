import React, { useState } from 'react';
import { Speech } from './Speech';
import * as phrasesData from '../../data/phrases.json';

const phrases = phrasesData.data;

export const TrainPage = () => {
  const [phrase, setPhrase] = useState(getPhrase());
  const refresh = () => {
    setPhrase(getPhrase());
  };
  return (
    <Speech phrase={phrase} refresh={refresh} />
  );
};

const getPhrase = () => phrases[Math.floor(Math.random() * phrases.length)];
