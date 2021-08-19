import React from 'react';
import { speak } from '../services/speak';
import './index.css';

interface Props{
  word:string, children:React.ReactNode
}
export const SpeakWord = ({ word, children }:Props) => (
  <div role="tooltip" onClick={() => speak(word)}>
    {children}
  </div>
);
