import React, { useState } from 'react';

interface Props{
    // eslint-disable-next-line no-undef
    recognition:SpeechRecognition,

}

export const ListenButton = ({ recognition }:Props) => {
  const [recording, setRecording] = useState<Boolean>(false);

  if (recognition) {
    // eslint-disable-next-line no-param-reassign
    recognition.onend = () => setRecording(false);
    // eslint-disable-next-line no-param-reassign
    recognition.onstart = () => setRecording(true);
  } else {
    return <span>Not supported</span>;
  }

  if (!recording) {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          recognition.start();
        }}
      >
        Start recording
      </button>
    );
  }
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => {
        recognition.stop();
      }}
    >
      Stop recording
    </button>
  );
};
