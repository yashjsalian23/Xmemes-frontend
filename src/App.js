import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="App">
          <Route path="/" exact><h1></h1></Route>
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
