//React Imports
import { React, Fragment, useState } from "react";

//Internal Imports
import "./message.scss";

const Message = ({ userImage, name, message }) => {
  //Functions
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
  return (
    <Fragment>
      <div className="message-container container">
        <div className="message-left">
          <img
            style={{ border: `3px solid #${getRanHex(6)}` }}
            src={userImage}
            alt="userimage"
            className="message-photo"
          />
        </div>
        <div className="message-right">
          <p className="message-username">{name}</p>
          <p className="message-content">{message}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
