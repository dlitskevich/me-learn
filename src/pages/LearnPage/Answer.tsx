import React from 'react';

export const Answer = ({ word, content, value }:{word:string, content: string, value: number}) => (
  <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => addWord(word, value)}>
    {content}
  </button>
);

const addWord = (word:string, value:number, lang = 'en') => {
  const dictString = localStorage.getItem(`${lang}_words`);
  if (dictString) {
    const dict = JSON.parse(dictString);
    dict[word] = value;
    localStorage.setItem(`${lang}_words`, JSON.stringify(dict));
  } else {
    localStorage.setItem(`${lang}_words`, JSON.stringify({ [word]: value }));
  }
};

// const addWord = (word:string, value:number, lang = 'en') => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       const db = firebase.firestore();
//       const docRef = db.collection('users').doc(user.uid).collection(`${lang}Dict`).doc(word);

//       docRef.get()
//         .then((docSnapshot) => {
//           if (docSnapshot.exists) {
//             docRef.update({
//               understanding: value,
//             });
//           } else {
//             docRef.set({ understanding: value });
//           }
//         });
//     }
//   });
// };
