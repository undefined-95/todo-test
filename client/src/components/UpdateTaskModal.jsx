import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTaskById } from '../store/thunks/tasksThunks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
  TextField,
  useMediaQuery,
} from '@mui/material';

const UpdateTaskModal = ({ state, onClose, task }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [data, setData] = useState({ title: '', deadline: '' });

  const handleCompleteTask = async () => {
    dispatch(
      updateTaskById({ ...task, title: data.title, deadline: data.deadline })
    );
    onClose();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={state}
      onClose={onClose}
      sx={{ marginBottom: '15%' }}
    >
      <DialogTitle>Изменить</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="task"
          label="Введите новую задачу"
          fullWidth
          variant="standard"
          onChange={({ target }) => setData({ ...data, title: target.value })}
        />
        <TextField
          autoFocus
          margin="dense"
          id="deadline"
          type="date"
          fullWidth
          variant="standard"
          onChange={({ target }) =>
            setData({ ...data, deadline: target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button disabled={!!!data.title} onClick={handleCompleteTask}>
          Изменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateTaskModal;
