import React, { useEffect } from 'react';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

export const AuthPage = () => (
  <div className="container">
    <FireAuth />
  </div>
);

const FireAuth = () => {
  useEffect(authUi, []);
  return (
    <>
      <div id="firebaseui-auth-container" />
      <div id="loader">
        Loading...
      </div>
      <button type="button" onClick={() => console.log(firebase.auth().currentUser)}>text</button>
    </>
  );
};

const authUi = () => {
  // Initialize the FirebaseUI Widget using Firebase.
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  const uiConfig = {
    callbacks: {
      // eslint-disable-next-line no-unused-vars
      signInSuccessWithAuthResult(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
      uiShown() {
        // The widget is rendered.
        // Hide the loader.
        const loader = document.getElementById('loader');
        if (loader) {
          loader.style.display = 'none';
        }
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>',
  };
  ui.start('#firebaseui-auth-container', uiConfig);
};
