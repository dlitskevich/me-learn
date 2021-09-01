import { useEffect, useState } from 'react';

interface Props{
    target:string,
    // eslint-disable-next-line no-unused-vars
    setSuccess: (v:boolean|undefined) => void
}

export const useSameText = ({ target, setSuccess }:Props) => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    if (selected) {
      setSuccess(samePhrase(target, selected));
    }
  });
  return { selected, setSelected };
};

const samePhrase = (target:string, recieved:string) => target === recieved;
