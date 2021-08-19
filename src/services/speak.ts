export const speak = (text:string) => {
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
};
