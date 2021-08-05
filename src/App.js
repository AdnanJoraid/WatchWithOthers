import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Route component={HomeScreen} path='/' exact />
    </Router>
  );
}

export default App;
