//React Imports
import { React, Fragment, useState } from "react";

//Internal Imports
import "./message.scss";

const Message = ({ userImage, name, message }) => {
  return (
    <Fragment>
      <div className="message-container container">
        <div className="message-left">
          <img src={userImage} alt="userimage" className="message-photo" />
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
