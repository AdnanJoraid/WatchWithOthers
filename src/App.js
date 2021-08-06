import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import JoinScreen from './screens/JoinScreen';
import Room from './screens/Room';

function App() {
  return (
    <Router>
      <Route component={HomeScreen} path='/' exact />
      <Route component={Room} path='/room/:id' exact />
      <Route component={JoinScreen} path='/join' exact />
    </Router>
  );
}

export default App;
