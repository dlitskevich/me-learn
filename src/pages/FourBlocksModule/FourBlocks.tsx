import React from 'react';
import { Block } from './Block';

interface Props{
    target:string,
    phrases:string[],
    isLoading: boolean,
    success: boolean|undefined,
    selected:string,
    // eslint-disable-next-line no-unused-vars
    setSelected: (v:string)=>any,
}

export const FourBlocks = ({ target, phrases, isLoading, selected, setSelected, success }:Props) => {
  if (isLoading) {
    return null;
  }
  const blocks : React.ReactNode[] = [];
  phrases.forEach((e) => {
    blocks.push(<Block key={e} phrase={e} isTarget={target === e} isSelected={selected === e} select={setSelected} success={success} />);
  });

  return <>{blocks}</>;
};
