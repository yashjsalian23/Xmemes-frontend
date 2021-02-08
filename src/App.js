import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/homepage';

import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="App">
          <Route path="/" exact><Homepage /></Route>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
