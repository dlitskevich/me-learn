import React from 'react';
import { SpeakWord } from '../../components/SpeakWord';

import { Answer } from './Answer';

const answersEn = [
  {
    content: 'Surely, know',
    value: 100,
    key: 1,
  },
  {
    content: 'Hesitate',
    value: 50,
    key: 2,
  },
  {
    content: "Don't know",
    value: 1,
    key: 3,
  },
];
interface Props{
  word:string,
  refresh: ()=>void
}

export const Learn = ({ word, refresh }:Props) => (
  <div className="container" style={{ maxWidth: '768px' }}>
    <SpeakWord word={word}>
      <h1 className="speakWord">{word}</h1>
    </SpeakWord>
    {/* hint */}
    <div className=" mt-3 d-flex justify-content-between">
      {answersEn.map((el) => <Answer key={`${word}${el.value}`} keyValue={el.key} onClick={refresh} word={word} content={el.content} value={el.value} />)}
    </div>
  </div>
);
