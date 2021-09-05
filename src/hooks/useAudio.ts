import { useEffect, useState } from 'react';

export function useAudio(url:string) {
  const [audio] = useState(new Audio(url));
  const [isToPlay, setIsToPlay] = useState<boolean>(false);

  const play = () => setIsToPlay(true);

  useEffect(() => {
    isToPlay ? audio.play() : audio.pause();
  }, [isToPlay]);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsToPlay(false));
    return () => {
      audio.removeEventListener('ended', () => setIsToPlay(false));
    };
  },
  []);

  return { play };
};
