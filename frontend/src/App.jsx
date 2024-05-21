import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Todos from './components/todos/Todos';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
