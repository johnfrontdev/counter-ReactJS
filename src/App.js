import React from "react";
import './App.css';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
