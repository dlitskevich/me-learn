import React, { useState } from 'react';
import { ModuleNavigation } from './ModuleNavigation';
import { useAsyncData } from '../../hooks/useAsyncData';
import { Module } from './Module';

const moduleTypes = [
  'Speech',
  'FourBlocks',
];

export const TrainExercisePage = () => {
  const { data, isLoading } = useAsyncData(getPhrases);
  const [type, setType] = useState('FourBlocks');

  return (
    <>
      <ModuleNavigation types={moduleTypes} setType={setType} />
      {data && type && !isLoading
        ? <Module data={data} type={type} />
        : <span>No data</span>}
    </>
  );
};

type Phrase ={
  phrase:string,
  ru:string
}

const getPhrases : ()=>Promise<Phrase[]> = () => import('../../data/en_verb10_phrases.json')
  .then((info) => info.default);
