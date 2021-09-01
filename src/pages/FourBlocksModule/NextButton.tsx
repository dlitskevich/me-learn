import React from 'react';

interface Props{
    success:boolean|undefined,
    isLoading: boolean,
    next: ()=>any

}

export const NextButton = ({ isLoading, success, next }:Props) => {
  if (isLoading) {
    return <span>Is loading</span>;
  }
  if (success === undefined) {
    return (
      <button type="button" className="btn btn-outline-secondary" onClick={next}>
        Skip
      </button>
    );
  }
  if (!success) {
    return (
      <button type="button" className="btn btn-primary" onClick={next}>
        Next
      </button>
    );
  }
  return (
    <button type="button" className="btn btn-success" onClick={next}>
      Next
    </button>
  ); ;
};
