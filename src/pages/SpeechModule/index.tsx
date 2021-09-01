/* eslint-disable max-len */
import React, { useState } from 'react';
import { useRecognition } from '../../hooks/useRecognition';
import { MainListenButton } from './MainListenButton';
import { SameText } from './SameText';
import './index.css';
import { AuxListenButton } from './AuxListenButton';
import { useSameTextSpeech } from '../../hooks/useSameTextSpeech';

interface Props{
  phrase:string,
  refresh: ()=>void,
  // eslint-disable-next-line no-unused-vars
  onSuccess: (success:boolean)=>Promise<any>,
  // eslint-disable-next-line no-unused-vars
  task?: ({ phrase, words, isRecognised }:{phrase:string, words:string[], isRecognised:(i:number) => boolean|undefined})=>React.ReactNode
}

export const Speech = ({ phrase, refresh, onSuccess, task }:Props) => {
  const [success, setSuccess] = useState<boolean|undefined>();
  const succeed = (v:boolean|undefined) => { setSuccess(v); };
  const { text, isLoading, start, stop, reset } = useRecognition();
  const { words, isRecognised } = useSameTextSpeech({ phrase, recieved: text, onSuccess: succeed });

  const next = () => {
    if (!isLoading) {
      onSuccess(!!success).then(() => {
        reset(); refresh(); setSuccess(undefined);
      });
    }
  };
  const testNext = () => {
    if (!isLoading) {
      onSuccess(true).then(() => {
        reset(); refresh(); setSuccess(undefined);
      });
    }
  };

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      {task ? task({ phrase, words, isRecognised })
        : (
          <h1>
            <SameText words={words} isRecognised={isRecognised} />
          </h1>
        )}
      <p>{text}</p>
      <div id="control-panel">
        <div className="mb-2 d-flex justify-content-center">
          <button type="button" className="btn btn-outline-secondary" onClick={testNext}>
            Test Skip
          </button>
        </div>
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

Speech.defaultProps = {
  task: ({ words, isRecognised }) => (
    <h1>
      <SameText words={words} isRecognised={isRecognised} />
    </h1>
  ),
};
