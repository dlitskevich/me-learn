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
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
        }}
      >
        Log in
      </button>
    );
  }
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => {
        firebase.auth().signOut();
      }}
    >
      Log out
    </button>
  );
};
