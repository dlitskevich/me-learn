/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { UtterText } from '../../components/UtterText';
import { useRecognition } from '../../hooks/useRecognition';
import { ListenButton } from './ListenButton';
import { MainListenButton } from './MainListenButton';
import { SameText } from './SameText';
import './index.css';

interface Props{
  phrase:string,
  refresh: ()=>void
}

export const Speech = ({ phrase, refresh }:Props) => {
  // const { recognition, text } = useListenText();
  const [success, setSuccess] = useState<boolean|undefined>();
  const succeed = (v:boolean) => { setSuccess(v); };
  const { text, error, isLoading, start, stop, reset } = useRecognition();
  const next = () => {
    if (!isLoading) {
      reset(); refresh(); setSuccess(undefined); setTimeout(start, 10);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      <UtterText text={phrase}>
        <h1 className="speakWord">{phrase}</h1>
      </UtterText>
      <SameText phrase={phrase} recieved={text} onSuccess={succeed} />
      <p>{text}</p>
      <div className="mt-3 d-flex justify-content-between">
        <ListenButton isLoading={isLoading} start={start} stop={stop} success={success} />
        <button type="button" className={`btn ${success ? 'btn-success' : 'btn-secondary'}`} onClick={next}>
          Next
        </button>
      </div>
      <div className="btn-main-container btn-block">
        <MainListenButton isLoading={isLoading} start={start} stop={stop} next={next} success={success} />
      </div>

    </div>
  );
};
