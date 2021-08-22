import React from 'react';
import { ListenButton } from './ListenButton';

interface Props{
    success:boolean|undefined,
    isLoading: boolean,
    start: ()=>any,
    stop: ()=>any,
    next: ()=>any

}

export const MainListenButton = ({ isLoading, success, start, stop, next }:Props) => {
  if (isLoading || !success) {
    return <ListenButton isLoading={isLoading} start={start} stop={stop} success={success} />;
  }

  return (
    <button type="button" className="btn btn-success" onClick={next}>
      Next
    </button>
  );
};
