import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, addUserRequest } from '../types';
import { AppThunk } from '../redux/index';
import { postNewUser } from '../controller/controller';

const initialState = {
    user: {},
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
     loadUser(state, action: PayloadAction<User>) {
         return {...state,
            user: action.payload,
        }
     }
    }
});

export default slice.reducer;

export const {loadUser} = slice.actions;

export const login = (username: string): AppThunk => dispatch => {

};

export const addNewUser = (user: addUserRequest): AppThunk => dispatch => {
    postNewUser(user).then(createdUser => dispatch(loadUser(createdUser)));
}