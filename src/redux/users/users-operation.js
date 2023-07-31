import { userApi } from '../../service';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const followUser = createAsyncThunk(
  'users/followUser',
  async (
    { user, tweets, followers, avatar, following, id },
    { rejectWithValue }
  ) => {
    try {
  
      if (following) {
        const newFollowers = {
          user,
          tweets,
          followers: followers - 1,
          avatar,
          following: !following,
          id,
        };
        const users = await userApi.put(`/users/${id}`, newFollowers);
        return users.data;
      }

      const newFollowers = {
        user,
        tweets,
        followers: followers + 1,
        avatar,
        following: !following,
        id,
      };
      const users = await userApi.put(`/users/${id}`, newFollowers);
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const users = await userApi.get(`/users`);
      return users.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);