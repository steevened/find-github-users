import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsersSearch from '../components/users/UsersSearch';

const Navbar = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();

  return (
    <header className="relative">
      <nav className="navbar bg-base-200">
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
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
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
