import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserThunk } from '../store/slices/User.slice';

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const params = useParams();

  // console.log(params);

  useEffect(() => {
    dispatch(UserThunk(params.login));
  }, []);

  return <div>{user.login}</div>;
};

export default User;
