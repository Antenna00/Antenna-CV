import React from 'react';
import './App.css';
import Header from './Homepage/Header';
import Home from './Homepage/Home';
import LoadHome from './Loader/LoadHome.tsx';

function App() {

  return (
    <div className="App">
      <LoadHome />
    </div>
  );
}

export default App;
