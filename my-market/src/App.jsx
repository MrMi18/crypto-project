// src/App.jsx
import React from 'react';
// import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* <Navbar /> */}
      <main className="container mx-auto p-4">
        <Home />
      </main>
    </div>
  );
};

export default App;
