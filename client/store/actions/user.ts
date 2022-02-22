import axios from 'axios';
import { userSlice } from '../slices/user';
import { AppDispatch } from '../store';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/user');
    dispatch(userSlice.actions.getUsers(response.data));
  } catch (error) {
    console.log(error);
  }
};
