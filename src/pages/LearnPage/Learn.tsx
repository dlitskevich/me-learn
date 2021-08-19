import React from 'react';
import { SpeakWord } from '../../components/SpeakWord';

import { Answer } from './Answer';

const answersEn = [
  {
    content: 'Surely, know',
    value: 100,
  },
  {
    content: 'Hesitate',
    value: 50,
  },
  {
    content: "Don't know",
    value: 1,
  },
];

export const Learn = ({ word }:{word:string}) => (
  <div className="container-md" style={{ maxWidth: '768px' }}>
    <SpeakWord word={word}>
      <h1 className="speakWord">{word}</h1>
    </SpeakWord>
    {/* hint */}
    <div className="container mt-3 d-flex justify-content-between">
      {answersEn.map((el) => <Answer key={`answer${el.value}`} word={word} content={el.content} value={el.value} />)}
    </div>
  </div>
);
