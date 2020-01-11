import React from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute'
import {Route} from 'react-router-dom';
import Login from '../src/components/login/Login'
import Header from '../src/components/Header'
import Register from './components/register/Register';
import Workouts from './components/Home'
function App() {
  return (
    <>

    <Header/>
    <Route exact path  = '/' component = {Login}/>
    <Route path = '/register' component = {Register}/>
    <Route path = '/workouts' component = {Workouts}/>
    </>
  );
}

export default App;
