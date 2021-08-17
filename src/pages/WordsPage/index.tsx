import firebase from 'firebase';
import React from 'react';
import { WordsTable } from './WordsTable';
import { WordData } from '../../types';

export const WordsPage = () => (
  <WordsTable words={getWords()} />
);

const getWords = (lang = 'en') => {
  let data : WordData[] = [];
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const db = firebase.firestore();
      const docRef = db.collection('users').doc(`${lang}_${user.uid}`);

      docRef.onSnapshot((docSnapshot) => {
        if (docSnapshot.exists) {
          const docData = Object.entries({ ...docSnapshot.data() });
          if (docData) {
            data = docData.map(([key, val]) => ({ word: key, value: val }));
          }
        }
      });
    }
  });
  console.log(data);

  return data;
};
