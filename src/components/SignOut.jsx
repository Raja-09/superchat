import React from "react";
import {auth } from '../firebase.js';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function SignOut() {
  return (
    <div className="signout">
      <button className="btn btn-outline-danger " onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default SignOut;
