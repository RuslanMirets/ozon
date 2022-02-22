import React, { useEffect } from 'react';
import { getUsers } from '../store/actions/user';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="user-list">
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.password}</span>
            <span>{user.role[0].description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
