import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useUser } from './useUser';

export const useDoc = (collection:string, doc:string) => {
  const user = useUser();
  // eslint-disable-next-line max-len
  const [snap, setSnap] = useState<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>>();
  useEffect(() => {
    if (user) {
      const db = firebase.firestore();
      const docRef = db.collection(collection).doc(doc);

      docRef.onSnapshot((docSnapshot) => {
        if (docSnapshot.exists) {
          // const docData = Object.entries({ ...docSnapshot.data() });
          // if (docData) {
          //   data = docData.map(([key, val]) => ({ word: key, value: val }));
          // }
          setSnap(docSnapshot);
        }
      });
    }
  },
  [user]);
  return snap;
};
