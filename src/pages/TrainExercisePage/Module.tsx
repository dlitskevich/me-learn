import React, { useState } from 'react';
import { FourBlock } from '../FourBlocksModule';
import { Speech } from '../SpeechModule/index';
// import { getAllTrainPhrase, getTrainPhrase } from '../../services/trainPhrase';
// import { EnVerb } from '../../types/EnVerb';

type Phrase ={
  phrase:string,
  ru:string
}

type Props = {
  data: Phrase[],
  type: string
}

export const Module = ({ data, type }:Props) => {
  const [state, setState] = useState(0);
  const refresh = () => setState(state + 1);

  if (type === 'Speech') {
    const phrase = getRandPhrase(data);
    return (
      <Speech phrase={phrase.phrase} task={getTask(phrase.ru)} refresh={refresh} onSuccess={() => Promise.resolve()} />
    );
  }
  if (type === 'FourBlocks') {
    const [phrase, ...falsePhrases] = Math.randomSample(data, 4);
    const phrases = Math.shuffle([phrase, ...falsePhrases]);

    return (
      <FourBlock target={phrase.phrase} task={phrase.ru} phrases={phrases.map((e) => e.phrase)} refresh={refresh} onSuccess={() => Promise.resolve()} />
    );
  }
  return <span>Not selected type</span>;
};

const getTask = (task:string) => () => (
  <h1>
    {task}
  </h1>
);

const getRandPhrase = (phrases:Phrase[]) => Math.randomElement(phrases);

// const getPhrase = () => getVerb().then((v) => {
//   console.log(v);

//   return getTrainPhrase(v);
// });

// const getVerb = () => getVerbList()
//   .then((verbs) => verbs[Math.floor(Math.random() * verbs.length)]);

// const getVerbList : ()=>Promise<EnVerb[]> = () => {
//   const name = 'en_verbs10';
//   if (!localStorage.getItem(name)) {
//     return import('../../data/enVerb10.json').then((info) => {
//       const { data } = info.default;
//       localStorage.setItem(name, JSON.stringify(data));
//       return data;
//     });
//   }
//   return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
// };

// const getRandPhrases = (verbs:EnVerb[]) => {
//   const name = 'en_verbs10_phrases';
//   console.log(!localStorage.getItem(name) && verbs.length !== 0);

//   if (!localStorage.getItem(name) && verbs.length !== 0) {
//     console.log(verbs);
//     let phrases:string[] = [];
//     verbs.forEach((e) => { phrases = phrases.concat(getAllTrainPhrase(e)); });
//     localStorage.setItem(name, JSON.stringify(phrases));
//   }
// };
