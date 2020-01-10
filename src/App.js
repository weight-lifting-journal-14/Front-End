import React, { useState } from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./components/login";
import Logout from "./logout";
import Register from "./components/RegisterPage";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ExerciseList from './components/Forms/ExerciseList';
import UserLog from './components/Forms/UserLog'

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <NavBar isAuthenticated={isAuthenticated}/>
      <Route 
      exact path="/" 
      render={(props) => <Login {...props} setAuthenticated={setAuthenticated}/>}/>
      <Route 
      path="/logout" 
      render={(props) => <Logout {...props} setAuthenticated={setAuthenticated}/>}/>
      <Route path="/register" component={Register}/>
      <Route path="/profile" component={ExerciseList}/>
      <PrivateRoute path="/home" component={UserLog}/>
    </div>
  );
}

export default App;
