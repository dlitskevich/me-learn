import firebase from 'firebase';
import React from 'react';

export const Learn = ({ word }:{word:string}) => (
  <div className="container">
    <h1>{word}</h1>
    {/* hint */}
    <div className="container">
      {answersEn.map((el) => <Answer key={`answer${el.value}`} word={word} content={el.content} value={el.value} />)}
    </div>
  </div>
);

const answersEn = [
  {
    content: 'Surely, know',
    value: 100,
  },
  {
    content: 'Hesitate',
    value: 0,
  },
  {
    content: "Don't know",
    value: -100,
  },
];

const Answer = ({ word, content, value }:{word:string, content: string, value: number}) => (
  <button type="button" className="btn btn-lg" onClick={() => addWord(word, value)}>
    {content}
  </button>
);

const addWord = (word:string, value:number, lang = 'en') => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const db = firebase.firestore();
      const docRef = db.collection('users').doc(`${lang}_${user.uid}`);

      docRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
            docRef.update({
              [word]: value,
            });
          } else {
            docRef.set({ [word]: value });
          }
        });
    }
  });
};
