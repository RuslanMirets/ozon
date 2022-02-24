import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Toast from './Toast';

const Alert = () => {
  const { success, errors } = useAppSelector((state) => state.alert);

  return (
    <>
      {success && <Toast severity="success" body={success} />}
      {errors && <Toast severity="error" body={errors} />}
    </>
  );
};

export default Alert;
