import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { setDropDown } from './store/slices/dropDown.slice';
import User from './pages/User';
import Footer from './layout/Footer';
import About from './pages/About';

function App() {
  const loader = useSelector((state) => state.IsLoading);
  const dropdown = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="h-full min-h-screen relative">
        <Navbar />
        {loader && <Loader />}
        <main
          className={`transition-all duration-200 ease-in-out h-full pb-24 md:pb-16 ${
            dropdown ? 'blur-sm opacity-5' : ''
          }`}
          onClick={() => dispatch(setDropDown(false))}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/user/:login" element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
