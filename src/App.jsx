import React, { useState, useRef, useEffect } from 'react';
import Home from './routes/Home/Home';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
