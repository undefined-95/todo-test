import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/thunks/tasksThunks';
import {
  selectTasks,
  selectTasksLoading,
} from '../store/selectors/tasksSelectors';
import { resetSuccess } from '../store/slices/taskSlice';
import Task from './Task';

const TasksList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  const loading = useSelector(selectTasksLoading);

  useEffect(() => {
    if (!tasks.length && !loading) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks, loading]);

  // очистка сообщения об успешном добавлении задачи
  useEffect(() => {
    dispatch(resetSuccess());
  }, [dispatch]);

  return (
    <>
    {/* {!tasks.length && !loading && (<p>У вас нет записей в данном разделе</p>) } */}
      {tasks?.map((task) => (
        <Task task={task} key={task._id} />
      ))}
    </>
  );
};

export default TasksList;
