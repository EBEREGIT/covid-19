import React from 'react';
import './App.scss';
import GlobalReport from './components/GlobalReport';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <GlobalReport />
    </div>
  );
}

export default App;
