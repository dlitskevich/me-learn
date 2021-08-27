import React from 'react';
import { useAsyncData } from '../../hooks/useAsyncData';
import { getTrainPhrase } from '../../services/trainPhrase';
import { EnVerb } from '../../types/EnVerb';
import { Speech } from '../SpeechModule/index';

export const TrainExercisePage = () => {
  const { data, reload } = useAsyncData(getPhrase);
  console.log(data);

  if (data) {
    return (
      <Speech phrase={data.target} task={getTask(data.emoji)} refresh={reload} onSuccess={() => Promise.resolve()} />
    );
  }
  return <span>No data</span>;
};

const getTask = (task:string) => () => (
  <h1>
    {task}
  </h1>
);

const getPhrase = () => getVerb().then((v) => {
  console.log(v);

  return getTrainPhrase(v);
});

const getVerb = () => getVerbList()
  .then((verbs) => verbs[Math.floor(Math.random() * verbs.length)]);

const getVerbList : ()=>Promise<EnVerb[]> = () => {
  const name = 'en_verbs10';
  if (!localStorage.getItem(name)) {
    return import('../../data/enVerb10.json').then((info) => {
      const { data } = info.default;
      localStorage.setItem(name, JSON.stringify(data));
      return data;
    });
  }
  return Promise.resolve(JSON.parse(localStorage.getItem(name) || '[]'));
};
