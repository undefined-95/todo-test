import React from 'react';
import TasksList from '../../components/TasksList';
import { Button } from '@mui/material';
import ModalWindow from '../../components/AddTaskModal';
import SortButton from '../../components/SortButton';


const HomePage = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(!open);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ width: '-webkit-fill-available' }}
      >
        Добавить
      </Button>
      <SortButton />
      <ModalWindow state={open} onClose={handleClickOpen} />
      <TasksList />
    </>
  );
};

export default HomePage;
