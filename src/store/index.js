import { configureStore } from '@reduxjs/toolkit';
import dropDownSlice from './slices/dropDown.slice';
import IsLoading from './slices/IsLoadingSlice';
import users from './slices/UsersSlice';
import UserSlice from './slices/User.slice';

export default configureStore({
  reducer: {
    IsLoading: IsLoading,
    users: users,
    dropdown: dropDownSlice,
    user: UserSlice,
  },
});
