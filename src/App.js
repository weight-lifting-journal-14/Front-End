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
<<<<<<< HEAD
      <PrivateRoute path="/profile" component={Profile}/>
      <PrivateRoute path="/home" component={Home}/>
=======
      <Route path="/profile" component={ExerciseList}/>
      <PrivateRoute path="/home" component={UserLog}/>
>>>>>>> 401bbdd60b39cdd7537af190848595ec8fbf79e9
    </div>
  );
}

export default App;
