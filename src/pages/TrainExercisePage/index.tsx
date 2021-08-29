import React from 'react';
import { useAsyncData } from '../../hooks/useAsyncData';
// import { getAllTrainPhrase, getTrainPhrase } from '../../services/trainPhrase';
// import { EnVerb } from '../../types/EnVerb';
import { Speech } from '../SpeechModule/index';

export const TrainExercisePage = () => {
  const { data, reload } = useAsyncData(getRandPhrase);
  console.log(data);

  if (data) {
    return (
      <Speech phrase={data.phrase} task={getTask(data.ru)} refresh={reload} onSuccess={() => Promise.resolve()} />
    );
  }
  return <span>No data</span>;
};

const getTask = (task:string) => () => (
  <h1>
    {task}
  </h1>
);

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

type Phrase ={
  phrase:string,
  ru:string
}

const getPhrases : ()=>Promise<Phrase[]> = () => {
  const name = 'en_verb10_phrases';
  if (!localStorage.getItem(name)) {
    return import('../../data/en_verb10_phrases.json').then((info) => {
      localStorage.setItem(name, JSON.stringify(info.default));
      return info.default;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};

const getRandPhrase : () => Promise<Phrase> = () => getPhrases().then((e) => e[Math.floor(Math.random() * e.length)]);
