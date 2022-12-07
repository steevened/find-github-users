import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './IsLoadingSlice';

export const reposSlice = createSlice({
  name: 'repos',
  initialState: [],
  reducers: {
    getRepos: (state, action) => {
      return action.payload;
    },
  },
});

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getReposThunk = (login) => (dispatch) => {
  dispatch(setIsLoading(true));

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  return axios
    .get(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    .then((res) => dispatch(getRepos(res.data)))
    .catch((error) => console.log(error.response.data.message))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { getRepos } = reposSlice.actions;
export default reposSlice.reducer;
