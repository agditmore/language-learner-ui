import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, addUserRequest } from '../types';
import { AppThunk } from '../redux/index';
import { postNewUser, getUserByUsername, getUserByUserId } from '../controller/controller';

const initialUser: User = {
  id: '',
  username: '',
  fullName: '',
  email: '',
  languages: [],
}

const initialState = {
  user: initialUser,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    loadUser(state, action: PayloadAction<User>) {
      return { ...state, user: action.payload };
    },
  },
});

export default slice.reducer;

export const { loadUser } = slice.actions;

export const login = (username: string): AppThunk => dispatch => {
  getUserByUsername(username).then(user => dispatch(loadUser(user)));
};

export const getUserById = (userId: string): AppThunk => dispatch => {
  getUserByUserId(userId).then(user => dispatch(loadUser(user)));
};

export const addNewUser = (user: addUserRequest): AppThunk => dispatch => {
  postNewUser(user).then(createdUser => dispatch(loadUser(createdUser)));
};
