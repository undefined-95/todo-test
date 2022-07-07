import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateTaskInStore } from '../slices/taskSlice';

export const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3013/api/tasks');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/add',
  async (taskData, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3013/api/tasks',
        taskData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeTaskById = createAsyncThunk(
  'tasks/removeById',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3013/api/tasks/${id}`, {
        method: 'DELETE',
      });

      return { taskId: id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateTaskById = createAsyncThunk(
  'tasks/updateById',
  async (taskData, thunkAPI) => {
    try {
      thunkAPI.dispatch(updateTaskInStore(taskData));
      await axios.patch(
        `http://localhost:3013/api/tasks/${taskData._id}`,
        taskData
      );

      return { taskId: taskData._id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
