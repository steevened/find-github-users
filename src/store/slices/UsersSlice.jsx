import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './IsLoadingSlice';

export const UsersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const searchUsersThunk = (text) => (dispatch) => {
  dispatch(setIsLoading(true));

  const params = new URLSearchParams({
    q: text,
  });

  return axios
    .get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    .then((res) => dispatch(setUsers(res.data.items)))
    .catch((error) => console.log(error.response.data.message))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
