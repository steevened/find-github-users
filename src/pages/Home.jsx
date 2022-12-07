import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersItem } from '../components/users/UsersItem';
import UsersSearch from '../components/users/UsersSearch';
import { setDropDown } from '../store/slices/dropDown.slice';
import { GoMarkGithub } from 'react-icons/go';

const Home = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDropdown = () => {
    dispatch(setDropDown(true));
  };

  //get initial users, for testing purposes
  // useEffect(() => {
  //   dispatch(getUsersThunk());
  // }, []);

  console.log(users.length);

  return (
    <div className={`py-20 h-full w-5/6`}>
      {users.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 w-5/6 mx-auto">
          {users?.map((user) => (
            <UsersItem user={user} key={user.id} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <figure>
            <GoMarkGithub className="text-7xl md:text-9xl" />
          </figure>
          <p className="font-bold text-5xl">Finder</p>
        </div>
      )}
    </div>
  );
};

export default Home;
