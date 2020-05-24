import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


import { BrowserRouter, Route, Switch} from "react-router-dom";

//IMPORT VIEWS
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SignUp from "./views/SignUp";
import Profile from "./views/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Switch>

        <Route path="/" exact component ={HomePage}/>
        <Route path="/login" exact component ={LoginPage}/>
        <Route path="/signup" exact component ={SignUp}/>
        <Route path="/profile" exact component ={Profile}/>

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
