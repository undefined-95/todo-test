import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
import { addTask } from '../store/thunks/tasksThunks';

const ModalWindow = ({ state, onClose }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({ title: '', deadline: '' });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const TaskAdd = () => {
    dispatch(addTask(data));
    onClose();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={state}
      onClose={onClose}
      sx={{ marginBottom: '15%' }}
    >
      <DialogTitle>Добавить</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="task"
          label="Введите задачку"
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
        <Button disabled={!!!data.title} onClick={TaskAdd}>
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
