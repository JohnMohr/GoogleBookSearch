import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Shelf from "./pages/Shelf";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path="/shelf" component={Shelf}/>
      </Switch>
    </Router>
    
  );
}

export default App;
