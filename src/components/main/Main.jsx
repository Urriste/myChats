import { React, Fragment, useState, useEffect } from "react";
import "./main.scss";
import { getAuth } from "firebase/auth";
import Message from "../message/Message";
import { useHistory } from "react-router";

const Main = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    photo: "",
    email: "",
  });

  const auth = getAuth();
  console.log(auth);

  useEffect(() => {
    let { displayName, photoURL, email } = auth.currentUser;

    photoURL = photoURL.replace("s96-c", "s400-c");

    if (displayName) {
      setUser({
        name: displayName,
        photo: photoURL,
        email: email,
      });
    }
  }, [auth]);

  return (
    <Fragment>
      <div className="container-fluid chat-container">
        <div className="row">
          <div className="text-area col-sm-12">
            <Message
              className="message"
              userImage={user.photo}
              name={user.name}
            ></Message>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
