import { authSlice } from './../slices/auth';
import { IUser } from './../../models/user';
import axios from 'axios';
import { AppDispatch } from '../store';

export const login = (userData: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', userData);
    dispatch(authSlice.actions.login(response.data));
  } catch (error) {
    console.log(error);
  }
};
