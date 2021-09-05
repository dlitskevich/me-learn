import React, { useEffect, useState } from 'react';
import './index.css';
import { useSameText } from '../../hooks/useSameText';
import { NextButton } from './NextButton';
import { FourBlocks } from './FourBlocks';
import { useSuccessAudio } from '../../hooks/useSuccessAudio';

interface Props{
  target:string,
  phrases: string[],
  refresh: ()=>void,
  onSuccess: (success:boolean|undefined)=>any,
  task:string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FourBlock = ({ target, phrases, refresh, onSuccess, task }:Props) => {
  const [success, setSuccess] = useState<boolean|undefined>();
  const { selected, setSelected } = useSameText({ target, setSuccess });
  const successAudio = useSuccessAudio();

  useEffect(() => {
    successAudio.play(success);
  },
  [selected, success]);

  const next = () => {
    setSuccess(undefined);
    setSelected('');
    refresh();
  };

  return (
    <div className="container" style={{ maxWidth: '768px' }}>
      <h1>
        {task}
      </h1>
      <div id="control-panel">
        <div className="mb-2 d-flex justify-content-center">
          <NextButton isLoading={false} next={next} success={success} />
        </div>
        <div className="btn-main-container btn-block mb-2">
          <FourBlocks
            target={target}
            phrases={phrases}
            isLoading={false}
            selected={selected}
            setSelected={setSelected}
            success={success}
          />
        </div>
      </div>
    </div>
  );
};
