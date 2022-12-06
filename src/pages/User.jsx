import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UserThunk } from '../store/slices/User.slice';
import { getReposThunk } from '../store/slices/Repos.slice';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FaStoreAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import RepoList from '../components/repos/RepoList';

const User = () => {
  const user = useSelector((state) => state.user);
  const IsLoading = useSelector((state) => state.IsLoading);
  const dispatch = useDispatch();
  const params = useParams();
  const repos = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(UserThunk(params.login));
    dispatch(getReposThunk(params.login));
  }, []);

  if (IsLoading) {
    return <Loader />;
  }

  console.log(repos);

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
      <div className=" h-full min-h-screen mx-auto w-5/6 ">
        <div className="my-6">
          <Link to="/" className="btn btn-ghost btn-circle">
            <AiOutlineArrowLeft />
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-5 ">
          <div className="custom-card-image mb-6 md:mb-0 ">
            <div className="rounded-lg shadow-xl card image-full ">
              <figure>
                <img src={avatar_url} alt="user avatar" />
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
              <p>{bio ? bio : 'No bio yet'}</p>
              <div className="mt-2 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline  text-2xl"
                >
                  <GoMarkGithub className="mr-2" />
                  <span className="text-sm">Visit Profile</span>
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row  shadow-lg bg-base-300 rounded-none stats">
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

        <div className="w-full py-5 my-5 rounded-none shadow-lg bg-base-300 stats flex flex-col lg:flex-row">
          <div className="stat">
            <div className="stat-figure text-slate-500">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          {/* end of stat */}
          <div className="stat">
            <div className="stat-figure text-slate-500">
              <ImUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          {/* end of stat */}
          <div className="stat">
            <div className="stat-figure text-slate-500">
              <RiGitRepositoryLine className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          {/* end of repos */}
          <div className="stat">
            <div className="stat-figure text-slate-500">
              <FaStoreAlt className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
          {/* end of gists */}
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
