import React from 'react';

interface Props{
    phrase:string,
    // eslint-disable-next-line no-unused-vars
    select: (phrase:string)=>void,
    success: boolean|undefined,
    isSelected:boolean,
    isTarget:boolean
}

export const Block = ({ phrase, select, success, isSelected, isTarget }:Props) => (
  <button type="button" className={`block btn ${getClass(success, isTarget, isSelected)}`} onClick={() => select(phrase)}>
    {phrase}
  </button>
);

const getClass = (success:boolean|undefined, isTarget:boolean, isSelected:boolean) => {
  if (success === undefined) {
    return 'btn-outline-secondary';
  }
  if (isTarget) {
    return 'btn-success disabled';
  }
  if (isSelected) {
    return 'disabled btn-danger ';
  }
  return 'btn-outline-secondary disabled';
};
