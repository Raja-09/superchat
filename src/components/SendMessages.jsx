import React, { useState } from "react";
import { Input } from "@mui/material/";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function SendMessages() {
  const [msg, setMsg] = useState("");
  const generateRandomId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  async function sendMessage(e) {
    e.preventDefault();
    if (msg.split(" ").join("")) {
      const { uid } = auth.currentUser;
      await db.collection("messages").add({
        text: msg,
        id: generateRandomId(),
        photoUrl: auth.currentUser.photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMsg("");
    }
  }

  return (
    <div>
      <form onSubmit={sendMessage} className="textbox">
        <Input className="textbox_input"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Message..."
          autoFocus={true}
        />
        <button className="btn btn-primary btn-sm m-2" type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMessages;
