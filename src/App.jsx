import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { setDropDown } from './store/slices/dropDown.slice';

function App() {
  const loader = useSelector((state) => state.IsLoading);
  const dropdown = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="h-full min-h-screen ">
        <Navbar />
        {loader && <Loader />}
        <main
          className={`transition-all duration-500 h-full min-h-screen ${
            dropdown ? 'blur-sm opacity-5' : ''
          }`}
          onClick={() => dispatch(setDropDown(false))}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
