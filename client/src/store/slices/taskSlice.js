import { createSlice } from '@reduxjs/toolkit';

import {
  addTask,
  fetchTasks,
  removeTaskById,
  updateTaskById,
} from '../thunks/tasksThunks';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'ALL',
    loading: false,
    error: '',
    success: false,
  },
  reducers: {
    resetStatus: (state) => {
      state.error = '';
    },
    resetSuccess: (state) => {
      state.success = false;
    },
    setTasksFilter: (state, action) => {
      state.filter = action.payload;
    },
    updateTaskInStore: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        action.payload._id === task._id ? action.payload : task
      );
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.loading = true;
      state.tasks = [];
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    [removeTaskById.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter(
        (item) => item._id !== action.payload.taskId
      );
    },
    [updateTaskById.fulfilled]: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    },
    [addTask.pending]: (state) => {
      state.loading = true;
      state.success = false;
    },
    [addTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload.task);
    },
    [addTask.rejected]: (state, action) => {
      state.error = JSON.stringify(action.payload.errors);
      state.loading = false;
    },
  },
});

export const { resetStatus, resetSuccess, setTasksFilter, updateTaskInStore } =
  tasksSlice.actions;

export default tasksSlice.reducer;
