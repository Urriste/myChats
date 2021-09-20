import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyD-816VJFE9ZaEwLVA2xgP7n8kuvZBjh5I",
  authDomain: "mychats-2002.firebaseapp.com",
  projectId: "mychats-2002",
  storageBucket: "mychats-2002.appspot.com",
  messagingSenderId: "852166207406",
  appId: "1:852166207406:web:5036afe8fb0f58bd88ca3f",
  measurementId: "G-WP670H8HTN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
