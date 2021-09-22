//React Imports
import { React, Fragment, useState, useEffect, useRef } from "react";

//Internal Imports
import "./main.scss";
import Message from "../message/Message";
import sendImg from "../../img/send.png";

//External Imports
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { useHistory } from "react-router";

const Main = () => {
  //Firebase instances
  const db = getDatabase();
  const auth = getAuth();

  //States
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{}]);

  //Handlers and Functions
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMesssage = (e) => {
    if (e.target.valid) {
      e.preventDefault();
      let { displayName, photoURL } = auth.currentUser;
      photoURL = photoURL.replace("s96-c", "s400-c");

      let messageObject = {
        username: displayName,
        photo: photoURL,
        message: message,
      };

      push(ref(db, "messages"), messageObject);
    }

    /*   */
  };

  const getMessages = () => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setMessages(data);
    });
  };

  //Effects
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Fragment>
      <div className="container-fluid chat-container">
        <div className="text-area col-sm-12">
          <div className="chat-welcome__message">
            <h4 className="welcome-message">¡Bienvenido/a a MyChats!</h4>
            <p>
              {" "}
              <i>Empezá a chatear , mandá un mensaje! </i>{" "}
            </p>
          </div>
          {messages
            ? Object.keys(messages).map((item, index) => {
                const { username, photo, message } = messages[item];

                return (
                  <Message
                    userImage={photo}
                    name={username}
                    message={message}
                    key={index}
                  ></Message>
                );
              })
            : null}
        </div>

        <form className="send-form">
          <input
            required
            onChange={handleChange}
            type="text"
            placeholder="Message"
            className="send-input"
          />
          <button className="send-btn" onClick={handleMesssage}>
            <img src={sendImg} alt="send img" />
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Main;
