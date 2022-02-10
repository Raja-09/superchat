import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import SendMessages from "./SendMessages";
import SignOut from "./SignOut";
import { Button } from "@mui/material/";

function Chat() {
  const [messages, setMessages] = useState([]);
  let getMsgClass = (uid) => {
    let classes = "";
    if (uid === auth.currentUser.uid) classes += "sent";
    else classes += "recieved ";
    return classes;
  };
  const removeMsg = (id) => {
    //print id
    db.collection("messages")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };
  useEffect(() => {
    db.collection(`messages/`)
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="messages">
        {messages.map(({ id, text, photoUrl, uid }) => (
          <div className={getMsgClass(uid)} key={id}>
            <img src={photoUrl} alt="" />
            <span className="text"><div className="val">{text}</div></span>
            {uid === auth.currentUser.uid ? (
              <Button onClick={() => removeMsg(id)}>Delete</Button>
              ) : null}
            
          </div>
        ))}
      </div>
      <SendMessages />
    </div>
  );
}

export default Chat;
