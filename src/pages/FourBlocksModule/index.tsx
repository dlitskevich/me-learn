/* eslint-disable max-len */
import React, { useState } from 'react';
import './index.css';
import { useSameText } from '../../hooks/useSameText';
import { NextButton } from './NextButton';
import { FourBlocks } from './FourBlocks';

interface Props{
  target:string,
  phrases: string[],
  refresh: ()=>void,
  // eslint-disable-next-line no-unused-vars
  onSuccess: (success:boolean)=>Promise<any>,
  task:string
}

export const FourBlock = ({ target, phrases, refresh, onSuccess, task }:Props) => {
  const [success, setSuccess] = useState<boolean|undefined>();
  const { selected, setSelected } = useSameText({ target, setSuccess });

  const next = () => {
    onSuccess(!!success).finally(() => {
      refresh();
      setSelected('');
      setSuccess(undefined);
    });
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
          <FourBlocks target={target} phrases={phrases} isLoading={false} selected={selected} setSelected={setSelected} success={success} />
        </div>
      </div>
    </div>
  );
};
