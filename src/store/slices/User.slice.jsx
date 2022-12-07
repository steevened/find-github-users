import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setIsLoading } from './IsLoadingSlice';
// const navigate = useNavigate();

export const UserSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const UserThunk = (login) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    .then((res) => {
      if (res.status === 404) {
        // navigate('/notfound');
        window.location = '/';
        console.log(error);
      } else {
        dispatch(getUser(res.data));
      }
    })
    .catch((error) => console.log(error.response.data.message))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
