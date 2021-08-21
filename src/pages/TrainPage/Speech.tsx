import React, { useEffect, useState } from 'react';
import { UtterText } from '../../components/UtterText';
import { useRecognition } from '../../hooks/useRecognition';
import { ListenButton } from './ListenButton';
import { SameText } from './SameText';

interface Props{
  phrase:string,
  refresh: ()=>void
}

export const Speech = ({ phrase, refresh }:Props) => {
  // const { recognition, text } = useListenText();
  const [success, setSuccess] = useState<boolean|undefined>();
  const succeed = (v:boolean) => { setSuccess(v); };
  const { text, error, isLoading, start, stop, reset } = useRecognition();

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      <UtterText text={phrase}>
        <h1 className="speakWord">{phrase}</h1>
      </UtterText>
      <SameText phrase={phrase} recieved={text} onSuccess={succeed} />
      <p>{text}</p>
      <div className="mt-3 d-flex justify-content-between">
        <ListenButton isLoading={isLoading} start={start} stop={stop} success={success} />
        <button
          type="button"
          className={`btn ${success ? 'btn-success' : 'btn-primary'}`}
          onClick={() => { refresh(); reset(); setSuccess(undefined); }}
        >
          Next
        </button>
      </div>

    </div>
  );
};
