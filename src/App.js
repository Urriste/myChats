import "./App.css";
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/main" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
