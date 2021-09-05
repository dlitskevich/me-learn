import React from 'react';
import { UtterText } from '../../components/UtterText';

interface Props{
  words:string[],
  isRecognised: (i:number) => boolean|undefined
}

export const SameText = ({ words, isRecognised }:Props) => (
  <div className="container d-flex flex-wrap">
    {words.map((el, i) => (
      <UtterText key={el} text={el}>
        <span style={{ color: getColor(i, isRecognised) }}>{`${el}`}</span>
      </UtterText>
    ))}
  </div>
);

// eslint-disable-next-line no-unused-vars
const getColor = (i:number, isRecognised:(v:number) => boolean|undefined) => {
  const val = isRecognised(i);
  if (val === undefined) {
    return 'black';
  }
  return val ? 'green' : 'red';
};
