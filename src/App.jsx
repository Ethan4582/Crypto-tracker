import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin.jsx';
import Footer from './components/Navbar/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App; // Export App as the default export
