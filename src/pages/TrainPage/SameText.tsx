import React, { useEffect } from 'react';

interface Props{
    phrase:string,
    recieved: string,
    // eslint-disable-next-line no-unused-vars
    onSuccess: (v:boolean) => void
}

export const SameText = ({ phrase, recieved, onSuccess }:Props) => {
  const words = phrase.split(' ');
  const recievedWords = recieved ? recieved.split(' ') : [];
  useEffect(() => {
    if (recievedWords.length) {
      onSuccess(samePhrase(words, recievedWords));
    }
  });
  return (
    <>
      {words.map((el, i) => <span key={el} style={{ color: getStyle(el, i, recievedWords) }}>{`${el} `}</span>)}
    </>
  );
};

const getStyle = (word:string, i:number, recievedWords:string[]) => {
  if (i < recievedWords.length) {
    return sameWord(word, recievedWords[i]) ? 'green' : 'red';
  }
  return 'black';
};

const samePhrase = (words:string[], recievedWords:string[]) => {
  if (words.length > recievedWords.length) {
    return false;
  }
  // eslint-disable-next-line max-len
  const sameCount = words.reduce((prev, cur, i) => prev + (sameWord(cur, recievedWords[i]) ? 1 : 0), 0);
  return sameCount / words.length > 0.7;
};

const sameWord = (word:string, recieved:string) => wordToNorm(word) === wordToNorm(recieved);

const wordToNorm = (word:string) => word.toLowerCase().replace(/[.,!?()]/g, '');
