import React from 'react';

interface Props{
    success:boolean|undefined,
    isLoading: boolean,
    start: ()=>any,
    next: ()=>any

}

export const AuxListenButton = ({ isLoading, success, start, next }:Props) => {
  if (isLoading) {
    return null;
  }
  if (!isLoading && success) {
    return (
      <button type="button" className="btn btn-outline-primary" onClick={start}>
        Try again
      </button>
    );
  }

  return (
    <button type="button" className="btn btn-outline-secondary" onClick={next}>
      Skip
    </button>
  );
};
