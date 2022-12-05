import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersItem } from '../components/users/UsersItem';
import UsersSearch from '../components/users/UsersSearch';

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  //get initial users, for testing purposes
  // useEffect(() => {
  //   dispatch(getUsersThunk());
  // }, []);

  // console.log(users);

  return (
    <div className="mt-10 w-5/6 mx-auto h-full grid sm:grid-cols-2 lg:grid-cols-3 justify-center  gap-5">
      {users?.map((user) => (
        <UsersItem user={user} key={user.id} />
      ))}
      <UsersSearch />
    </div>
  );
};

export default Home;
