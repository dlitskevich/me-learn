import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

export const AuthButton = () => {
  const [user, setUser] = useState<firebase.User | null>();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

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
