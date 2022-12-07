import React from 'react';
import { Link } from 'react-router-dom';

export const UsersItem = ({ user }) => {
  // console.log(user);

  return (
    <div className="card rounded-none card-side compact bg-base-300 w-full flex items-center justify-center px-5 shadow-lg ">
      <figure className="w-16 h-16 rounded-full  ">
        <img src={user.avatar_url} alt="user github" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl">{user.login}</h2>
        <Link to={`/user/${user.login}`}>
          <p className="opacity-40">Visit profile</p>
        </Link>
      </div>
    </div>
  );
};
