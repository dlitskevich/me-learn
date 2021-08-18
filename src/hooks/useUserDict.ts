import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useUser } from './useUser';

export const useUserDict = (lang:string) => {
  const user = useUser();
  const [snap, setSnap] = useState<firebase.firestore.DocumentData>();
  useEffect(() => {
    if (user) {
      const db = firebase.firestore();
      const docRef = db.collection('userDict').doc(`${lang}_${user.uid}`);

      docRef.onSnapshot((docSnapshot) => {
        if (docSnapshot.exists) {
          setSnap(docSnapshot.data());
        }
      });
    }
  },
  [user]);

  return snap;
};
