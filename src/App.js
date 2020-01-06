import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
