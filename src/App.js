import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import Room from './screens/Room';

function App() {
  return (
    <Router>
      <Route component={HomeScreen} path='/' exact />
      <Route component={Room} path='/room/:id' exact />
    </Router>
  );
}

export default App;
