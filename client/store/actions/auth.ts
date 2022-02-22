import { postAPI } from './../../utils/FetchData';
import { authSlice } from './../slices/auth';
import { IUser } from './../../models/user';
import { AppDispatch } from '../store';
import { destroyCookie, setCookie } from 'nookies';

export const login = (dto: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', dto);
    setCookie(null, 'ozonToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
export const logout = () => async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'ozonToken', null);
    dispatch(authSlice.actions.logout());
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
