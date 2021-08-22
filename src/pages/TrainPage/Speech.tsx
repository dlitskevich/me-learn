/* eslint-disable max-len */
import React, { useState } from 'react';
import { useRecognition } from '../../hooks/useRecognition';
import { MainListenButton } from './MainListenButton';
import { SameText } from './SameText';
import './index.css';
import { AuxListenButton } from './AuxListenButton';

interface Props{
  phrase:string,
  refresh: ()=>void
}

export const Speech = ({ phrase, refresh }:Props) => {
  const [success, setSuccess] = useState<boolean|undefined>();
  const succeed = (v:boolean) => { setSuccess(v); };
  const { text, isLoading, start, stop, reset } = useRecognition();
  const next = () => {
    if (!isLoading) {
      reset(); refresh(); setSuccess(undefined); start();
    }
  };

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      <h1>
        <SameText phrase={phrase} recieved={text} onSuccess={succeed} />
      </h1>
      <p>{text}</p>
      <div id="control-panel">
        <div className="mb-2 d-flex justify-content-center">
          <AuxListenButton isLoading={isLoading} start={start} next={next} success={success} />
        </div>
        <div className="btn-main-container btn-block mb-2">
          <MainListenButton isLoading={isLoading} start={start} stop={stop} next={next} success={success} />
        </div>
      </div>
    </div>
  );
};
