import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsersSearch from '../components/users/UsersSearch';
import { GoMarkGithub } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { setDropDown } from '../store/slices/dropDown.slice';

const Navbar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const dispatch = useDispatch();

  return (
    <header className="relative">
      <nav className="navbar  bg-base-200 px-3 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link onClick={() => dispatch(setDropDown(false))} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div className="mr-2">
              <GoMarkGithub />
            </div>
            Finder
          </Link>
        </div>
        <div className="navbar-end">
          <UsersSearch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
