import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserThunk } from '../store/slices/User.slice';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FaStoreAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

import { ImUsers } from 'react-icons/im';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const User = () => {
  const user = useSelector((state) => state.user);
  const IsLoading = useSelector((state) => state.IsLoading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(UserThunk(params.login));
  }, []);

  if (IsLoading) {
    return <Loader />;
  }

  console.log(user);

  const {
    avatar_url,
    bio,
    blog,
    collaborators,
    company,
    created_at,
    disk_usage,
    email,
    events_url,
    followers,
    followers_url,
    following,
    following_url,
    gists_url,
    gravatar_id,
    hireable,
    html_url,
    id,
    location,
    login,
    node_id,
    name,
    organizations_url,
    owned_private_repos,
    twitter_username,
    type,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <div className="w-full h-full min-h-screen mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost btn-circle">
            <AiOutlineArrowLeft />
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-5">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio ? bio : 'Not bio'}</p>
              <div className="mt-2 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-circle text-2xl"
                >
                  <GoMarkGithub />
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-lg bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={blog} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-lg bg-base-100 stats flex flex-col lg:flex-row">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          {/* end of stat */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <ImUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          {/* end of stat */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <RiGitRepositoryLine className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          {/* end of repos */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStoreAlt className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
          {/* end of gists */}
        </div>
      </div>
    </>
  );
};

export default User;
