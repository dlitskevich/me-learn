/* eslint-disable no-undef */
import { useState } from 'react';

// eslint-disable-next-line new-cap
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

export const useRecognition = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [error, setError] = useState<Error>();

  const start = () => {
    if (!recognition) {
      setError(new Error('Not supported'));
    }
    if (text) { reset(); }

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
    recognition.onend = () => setIsLoading(false);
    recognition.onerror = (err) => { setError(new Error(err.message)); setIsLoading(false); };
    recognition.onstart = () => setIsLoading(true);

    try {
      recognition.start();
    } catch (err) {
      console.error(err);
    }
  };

  const stop = () => {
    recognition.stop();
    setIsLoading(false);
  };

  const reset = () => {
    stop();
    setText('');
    setError(undefined);
  };
  return { text, error, isLoading, start, stop, reset };
};
