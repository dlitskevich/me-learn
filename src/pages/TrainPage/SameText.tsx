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

const getStyle = (el:string, i:number, recievedWords:string[]) => {
  if (i < recievedWords.length) {
    return sameWord(el, recievedWords[i]) ? 'green' : 'red';
  }
  return 'black';
};

const sameWord = (word:string, recieved:string) => word.toLowerCase() === recieved.toLowerCase();

const samePhrase = (words:string[], recievedWords:string[]) => {
  if (words.length > recievedWords.length) {
    return false;
  }
  const sameCount = words.reduce((prev, cur, i) => prev + (cur === recievedWords[i] ? 1 : 0), 0);
  return sameCount / words.length > 0.7;
};