import React from "react";
import { auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);
  }
  function signInWithEmail() {}

  return (
    <div className="main">
      <div className="background-card"></div>
      <div className="login">
        <h3 className="display-3">Super Chat App</h3>
        
        <button className="signInGoogle m-2" onClick={signInWithGoogle}>
          Sign in with Google
        </button>{" "}
        <button className="signInEmail mx-2" onClick={signInWithEmail}>
          Sign in with Email
        </button>
      </div>
    </div>
  );
}

export default SignIn;
