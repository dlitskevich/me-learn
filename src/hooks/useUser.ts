import { useEffect, useState } from 'react';
import firebase from 'firebase';

export const useUser = () => {
  const [user, setUser] = useState<firebase.User | null>();
  useEffect(() => firebase.auth().onAuthStateChanged(setUser), []);
  return user;
};
