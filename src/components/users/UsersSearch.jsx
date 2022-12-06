import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchUsersThunk } from '../../store/slices/UsersSlice';
import { setDropDown } from '../../store/slices/dropDown.slice';

const UsersSearch = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdown = useSelector((state) => state.dropdown);
  const users = useSelector((state) => state.users);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const activeDropdown = () => {
    dispatch(setDropDown(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    if (text === '') {
      dispatch(setDropDown(true));
    } else {
      //do something
      dispatch(searchUsersThunk(text));
      setText('');
      dispatch(setDropDown(false));
    }
  };

  // console.log(dropdown);

  return (
    <div className="z-10">
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              onClick={activeDropdown}
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="Search…"
              className={`${
                dropdown ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              } input md:input-lg absolute -translate-x-1/2 left-1/2 -bottom-[62px] md:-bottom-[75px] input-group-xs   focus:outline-none transition-all duration-500 bg-base-300/50  shadow-md `}
            />

            <button
              onClick={() => dispatch(setDropDown(true))}
              type="submit"
              className={` btn btn-circle btn-ghost rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>

      {/* {users.length > 0 && (
        <div>
          <button className="btn btn-ghost">Clear</button>
        </div>
      )} */}
    </div>
  );
};

export default UsersSearch;
