import React from 'react';
import { speak } from '../services/speak';
import './index.css';

interface Props{
  text:string, children:React.ReactNode
}
export const UtterText = ({ text, children }:Props) => (
  <div role="tooltip" onClick={() => speak(text)}>
    {children}
  </div>
);
