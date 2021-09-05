import { useAudio } from './useAudio';
import successUrl from '../audio/nice.m4a';
import errorUrl from '../audio/bruh.m4a';

export const useSuccessAudio = () => {
  const successAudio = useAudio(successUrl);
  const errorAudio = useAudio(errorUrl);
  const play = (success:boolean|undefined) => {
    console.log(success);

    if (success !== undefined) {
      success ? successAudio.play() : errorAudio.play();
    }
  };
  return { play };
};
