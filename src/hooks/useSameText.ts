import { useEffect } from 'react';

interface Props{
    phrase:string,
    recieved: string,
    // eslint-disable-next-line no-unused-vars
    onSuccess: (v:boolean|undefined) => void
}

export const useSameText = ({ phrase, recieved, onSuccess }:Props) => {
  const words = phrase.split(' ');
  const recievedWords = recieved ? recieved.split(' ') : [];
  useEffect(() => {
    onSuccess(samePhrase(words, recievedWords));
  });
  return { words, recievedWords, isRecognised: (i:number) => isRecognised(i, words, recievedWords) };
};

const isRecognised = (i:number, words:string[], recievedWords:string[]) => {
  if (i < recievedWords.length) {
    return !!sameWord(words[i], recievedWords[i]);
  }
  return undefined;
};

const samePhrase = (words:string[], recievedWords:string[]) => {
  if (!recievedWords.length) {
    return undefined;
  }
  if (words.length > recievedWords.length) {
    return false;
  }
  // eslint-disable-next-line max-len
  const sameCount = words.reduce((prev, cur, i) => prev + (sameWord(cur, recievedWords[i]) ? 1 : 0), 0);
  return sameCount / words.length > 0.7;
};

const sameWord = (word:string, recieved:string) => wordToNorm(word) === wordToNorm(recieved);

const wordToNorm = (word:string) => word.toLowerCase().replace(/[.,!?()]/g, '');
