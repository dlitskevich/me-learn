/* eslint-disable new-cap */
import { useEffect, useState } from 'react';

// eslint-disable-next-line no-undef
const recognition = new webkitSpeechRecognition();

export const useListenText = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
    return () => {
      recognition.onresult = () => {};
    };
  }, []);

  return { recognition, text };
};
