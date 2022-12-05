import { configureStore } from '@reduxjs/toolkit';
import IsLoading from './slices/IsLoadingSlice';
import users from './slices/UsersSlice';

export default configureStore({
  reducer: {
    IsLoading: IsLoading,
    users: users,
  },
});
