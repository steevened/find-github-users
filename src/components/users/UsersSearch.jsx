import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersThunk } from '../../store/slices/UsersSlice';

const UsersSearch = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something');
    } else {
      //do something
      dispatch(searchUsersThunk(text));
      setText('');
    }
  };

  console.log(users);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={text}
                onChange={handleChange}
                placeholder="Search"
                type="text"
                className="w-full pr-40 bg-gray-200 input  text-black"
              />
              <button
                type="sumbit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost">Clear</button>
        </div>
      )}
    </div>
  );
};

export default UsersSearch;
