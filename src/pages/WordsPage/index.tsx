import React from 'react';
import { WordsTable } from './WordsTable';
import { WordData } from '../../types';
import { useUserDict } from '../../hooks/useUserDict';

export const WordsPage = () => (
  <WordsTable words={getWords()} />
);

const getWords = (lang = 'en') => {
  const data : WordData[] = [];
  const dict = useUserDict(lang);
  console.log(dict);

  console.log(data);

  return data;
};
