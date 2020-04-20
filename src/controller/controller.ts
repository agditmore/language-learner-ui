import axios from 'axios';
import { addUserRequest, User } from '../types';

const usersUri: string ='users'

export const postNewUser = (userRequest: addUserRequest): Promise<User> => {
    return axios.post(`/${usersUri}`, userRequest).then(({ data }) => data);
};

export const getUserByUsername = (username: string): Promise<User> => {
    return axios.get(`/${usersUri}/username/${username}`).then(({ data }) => data);
}