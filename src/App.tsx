import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Task from './routes/Task';

import Appointments from './routes/Appointments';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> My Aide-Mémoire App</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/tasks">Tasks</a>
            <a href="/appointments">Appointments</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Task />} />
          
        
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
