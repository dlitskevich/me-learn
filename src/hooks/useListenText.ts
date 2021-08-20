/* eslint-disable new-cap */
import { useEffect, useState } from 'react';

export const useListenText = () => {
  // eslint-disable-next-line no-undef
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  const [text, setText] = useState('');
  // const [recording, setRecording] = useState<Boolean>(false);
  recognition.onresult = (event) => setText(event.results[0][0].transcript);
  return { recognition, text };
};
