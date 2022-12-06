import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersItem } from '../components/users/UsersItem';
import UsersSearch from '../components/users/UsersSearch';
import { setDropDown } from '../store/slices/dropDown.slice';

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

  // console.log(users);

  return (
    <div className={`py-20 h-full`}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 w-5/6 mx-auto">
        {users?.map((user) => (
          <UsersItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
