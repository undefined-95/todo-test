import React from 'react';
import { Box, Button, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';

import { DeleteIcon, RestoreIcon } from '../assets';
import { updateTaskById } from '../store/thunks/tasksThunks';
import UpdateTaskModal from './UpdateTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleCompleteTask = async () => {
    dispatch(updateTaskById({ ...task, completed: !task.completed }));
  };

  const handleClickUpdate = () => setOpenUpdate(!openUpdate);
  const handleClickDelete = () => setOpenDelete(!openDelete);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }} mb="10px">
        <Checkbox
          checked={task.completed}
          inputProps={{ 'aria-label': 'controlled' }}
          onChange={(e) => {
            handleCompleteTask(e.target.checked);
          }}
        />
        <Box>
          <h4>{task.title}</h4>
          <p>{task.deadline ? task.deadline : '-- -- ----'}</p>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleClickDelete}>{<DeleteIcon />}</Button>
        <DeleteTaskModal
          task={task}
          state={openDelete}
          onClose={handleClickDelete}
        />
        <Button onClick={handleClickUpdate}>{<RestoreIcon />}</Button>
        <UpdateTaskModal
          task={task}
          state={openUpdate}
          onClose={handleClickUpdate}
        />
      </Box>
    </Box>
  );
};

export default Task;
