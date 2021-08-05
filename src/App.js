import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import CreateRoomScreen from './screens/CreateRoomScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Route component={HomeScreen} path='/' exact />
      <Route component={CreateRoomScreen} path='/create' exact />
    </Router>
  );
}

export default App;
