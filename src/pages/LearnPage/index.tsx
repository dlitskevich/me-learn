import React from 'react';
import { Learn } from './Learn';

const data = {
  1: {
    word: 'mum',
    ipa: 'mam',
    ru: 'мама',
  },
  2: {
    word: 'dad',
    ipa: 'ded',
    ru: 'папа',
  },
  3: {
    word: 'sister',
    ipa: 'sista:',
    ru: 'сестра',
  },
};

export const LearnPage = () => (
  <Learn word={data[2].word} />
);
