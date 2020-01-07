import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./login";
import Register from "./RegisterPage";
import "./App.css";
import NavBar from "./components/Navbar";
import UserLog from './components/Forms/UserLog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserLog/>
      {/* <Route exact path="/">
        <Login />
      </Route> */}
      <Route path="/Register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
