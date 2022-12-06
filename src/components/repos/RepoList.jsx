import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div className="rounded-none shadow-lg card bg-base-300">
      <div className="card-body">
        <h2 className="text-2xl my-2 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
