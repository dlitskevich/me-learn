import React from 'react';

import { WordData } from '../../types';

interface Props{
  words:WordData[]
}
export const WordsTable = ({ words }:Props) => (
  <div className="container">
    { words
      ? (
        <div className="container">
          {words.map((el) => <Row key={`word${el.value}`} word={el.word} value={el.value} />)}
        </div>
      )
      : null}
  </div>
);

const Row = ({ word, value }:WordData) => (
  <div className="row">
    <p>s</p>
  </div>
);
