import React from 'react';
import firebase from 'firebase';
import { useUser } from '../hooks/useUser';

export const AuthButton = () => {
  const user = useUser();

  if (user === undefined) {
    return null;
  }
  if (!user) {
    return (
      <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={() => { firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()); }}>
        Log in
      </button>
    );
  }
  return (
    <button type="button" className="btn btn-outline-danger my-2 my-sm-0" onClick={() => { firebase.auth().signOut(); }}>
      Log out
    </button>
  );
};
