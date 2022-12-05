import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import Loader from './components/Loader';

function App() {
  const loader = useSelector((state) => state.IsLoading);

  return (
    <BrowserRouter>
      <div className="h-full min-h-screen ">
        <Navbar />
        {loader && <Loader />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
