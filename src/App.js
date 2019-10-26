import React from 'react';
import './App.css';
import WithNumberGenerator from './WithNumberGenerator';
import Hello from './Hello';

const EnhancedHello = WithNumberGenerator(Hello);

function App() {
  return (
    <div className="App">
      <EnhancedHello />
    </div>
  );
}

export default App;
