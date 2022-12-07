import React from 'react';
import { RxLink2 } from 'react-icons/rx';
import { RiEye2Line } from 'react-icons/ri';
import { VscStarFull } from 'react-icons/vsc';
import { FiAlertTriangle } from 'react-icons/fi';
import { GoRepoForked } from 'react-icons/go';

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    watchers_count,
    stargazers_count,
    open_issues,
    forks,
  } = repo;

  // console.log(repo);
  return (
    <div className="mb-2 rounded-none card bg-base-100 hover:bg-base-300 transition-colors duration-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url} target="_blank">
            <RxLink2 className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3 text-sm">{description}</p>
        {/* start of badges */}
        <div>
          <div className="tooltip cursor-auto" data-tip="Watchers">
            <div className="mr-2 badge badge-info badge-lg">
              <RiEye2Line className="mr-2" />
              {watchers_count}
            </div>
          </div>

          {/* end of badge */}
          <div className="tooltip cursor-auto" data-tip="Stars">
            <div className="mr-2 badge badge-success badge-lg">
              <VscStarFull className="mr-2" /> {stargazers_count}
            </div>
          </div>
          {/* end of badge */}
          <div className="tooltip cursor-auto" data-tip="Issues">
            <div className="mr-2 badge badge-error badge-lg">
              <FiAlertTriangle className="mr-2" /> {open_issues}
            </div>
          </div>

          {/* end of badge */}
          <div className="tooltip cursor-auto" data-tip="Forks">
            <div className="mr-2 badge badge-warning badge-lg">
              <GoRepoForked className="mr-2" /> {forks}
            </div>
          </div>
          {/* end of badge */}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
