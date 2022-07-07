import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { removeTaskById } from '../store/thunks/tasksThunks';

const DeleteTaskModal = ({ state, onClose, task }) => {
  const dispatch = useDispatch();

  const TaskRemove = () => {
    dispatch(removeTaskById(task._id));
    onClose();
  };

  return (
    <Dialog
      open={state}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Удалить'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы действительно хотите удалить задачу?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отменить</Button>
        <Button onClick={TaskRemove} autoFocus>
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTaskModal;
