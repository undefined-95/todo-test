import React from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { FilterIcon } from '../assets';
import { setTasksFilter } from '../store/slices/taskSlice';
import { selectFilter } from '../store/selectors/tasksSelectors';

const FILTER_VARIANTS = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE',
};

const SortButton = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            icon={<FilterIcon />}
            checked={selectedFilter === FILTER_VARIANTS.ALL}
            value={FILTER_VARIANTS.ALL}
            onChange={() => dispatch(setTasksFilter(FILTER_VARIANTS.ALL))}
            checkedIcon={<FilterIcon color="primary" />}
          />
        }
        label="Показать все"
      />
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            icon={<FilterIcon />}
            checked={selectedFilter === FILTER_VARIANTS.COMPLETED}
            value={FILTER_VARIANTS.COMPLETED}
            onChange={() => dispatch(setTasksFilter(FILTER_VARIANTS.COMPLETED))}
            checkedIcon={<FilterIcon color="primary" />}
          />
        }
        label="Показать выполненные"
      />
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            icon={<FilterIcon />}
            checked={selectedFilter === FILTER_VARIANTS.ACTIVE}
            onChange={() => dispatch(setTasksFilter(FILTER_VARIANTS.ACTIVE))}
            value={FILTER_VARIANTS.ACTIVE}
            checkedIcon={<FilterIcon color="primary" />}
          />
        }
        label="Показать невыполненные"
      />
    </Box>
  );
};

export default SortButton;
