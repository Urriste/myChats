import { React, Fragment } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "./login.scss";
import googleLogo from "../../img/google(1).png";
import chatsImage from "../../img/chats.svg";
import { useHistory } from "react-router";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const history = useHistory();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;

        const user = res.user;
        console.log(user);
        history.push("/main");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log("Error/s", errorCode, errorMessage, email, credential);
        // ...
      });
  };

  return (
    <Fragment>
      <div className="login container-fluid">
        <div className="row">
          <div className="image-section col-sm-12 col-md-6">
            <img className="chats-img" src={chatsImage} alt="chats" />
          </div>

          <div className="login-section col-sm-12 col-md-6">
            <h1 className="login-title">MyChats</h1>

            <div className="login-btn" onClick={handleGoogleLogin}>
              <img
                className="login-btn__img"
                src={googleLogo}
                alt="google logo"
              />
              <p>Login with Google</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
