import React from 'react';

interface Props{
    // eslint-disable-next-line no-undef
    success:boolean|undefined,
    isLoading: boolean,
    start: ()=>any,
    stop: ()=>any

}

export const ListenButton = ({ isLoading, success, start, stop }:Props) => {
  if (isLoading) {
    return (
      <button type="button" className="btn btn-danger" onClick={stop}>
        Stop recording
      </button>
    );
  }
  if (success === undefined) {
    return (
      <button type="button" className="btn btn-primary" onClick={start}>
        Start recording
      </button>
    );
  }
  return (
    <button type="button" className={success ? 'btn btn-primary' : 'btn btn-danger'} onClick={start}>
      Try again
    </button>
  );
};
