import React from 'react';
import { UtterText } from '../../components/UtterText';
import { useListenText } from '../../hooks/useListenText';
import { ListenButton } from './ListenButton';

interface Props{
    phrase:string,
  refresh: ()=>void
}

export const Speech = ({ phrase, refresh }:Props) => {
  const { recognition, text } = useListenText();
  console.log(text);

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      <UtterText text={phrase}>
        <h1 className="speakWord">{phrase}</h1>
      </UtterText>
      {/* hint */}
      <div className=" mt-3 d-flex justify-content-between">
        <ListenButton recognition={recognition} />
      </div>

    </div>
  );
};
