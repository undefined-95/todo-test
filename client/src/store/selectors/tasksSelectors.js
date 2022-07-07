import { createSelector } from '@reduxjs/toolkit';

const selectTasksState = (state) => state.tasks;

export const selectTasksLoading = createSelector(
  selectTasksState,
  (state) => state.loading
);
export const selectTasksSuccess = createSelector(
  selectTasksState,
  (state) => state.success
);
export const selectTasksError = createSelector(
  selectTasksState,
  (state) => state.error
);
export const selectTasks = createSelector(selectTasksState, (state) =>
  state.filter === 'ALL'
    ? state.tasks
    : state.tasks.filter((task) =>
        state.filter === 'COMPLETED' ? task.completed : !task.completed
      )
);
export const selectFilter = createSelector(
  selectTasksState,
  (state) => state.filter
);
