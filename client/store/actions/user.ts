import { getAPI } from './../../utils/FetchData';
import { userSlice } from '../slices/user';
import { AppDispatch } from '../store';

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('user');
    dispatch(userSlice.actions.getUsers(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
