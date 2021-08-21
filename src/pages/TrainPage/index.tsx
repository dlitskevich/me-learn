import React, { useState } from 'react';
import { Speech } from './Speech';

const phrases = [
  'I like playing chess',
  'He likes playing dodgeball',
  'I don\'t know that',
];

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
