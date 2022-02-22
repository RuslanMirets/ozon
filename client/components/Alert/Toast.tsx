import { Snackbar, Alert } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { alertSlice } from '../../store/slices/alert';

interface IProps {
  body: string | string[];
  severity: any;
}

const Toast = ({ body, severity }: IProps) => {
  const dispatch = useAppDispatch();

  const handleShow = () => {
    dispatch(alertSlice.actions.success(''));
    dispatch(alertSlice.actions.errors(''));
  };

  return (
    <Snackbar open autoHideDuration={4000} onClose={handleShow}>
      <Alert onClose={handleShow} severity={severity} sx={{ width: '100%' }}>
        {body}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
