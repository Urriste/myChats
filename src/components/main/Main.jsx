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

  const getRanHex = (size) => {
    let result = [];

    //possible values in a hexa number
    let hexRef = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    for (let n = 0; n < size; n++) {
      //we take a random position of 0 to 16, and we add the value of that position to the array
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }

    return result.join("");
  };

  const handleChange = (e) => {
    let valor = e.target.value.replace(/\n/g, "\r\n");
    console.log(valor);
    setMessage(valor);
  };

  const handleMesssage = (e) => {
    e.preventDefault();
    let textArea = document.querySelector("textarea");

    if (message != 0) {
      let { displayName, photoURL } = auth.currentUser;
      photoURL = photoURL.replace("s96-c", "s400-c");

      let messageObject = {
        username: displayName,
        photo: photoURL,
        message: message,
      };

      push(ref(db, "messages"), messageObject);
      textArea.value = "";
    }
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
            <h4 className="welcome-message">
              ¡Bienvenidx a{" "}
              <span style={{ color: `#02${getRanHex(6)}` }}>MyChats</span>!
            </h4>
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
          <textarea
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
