import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.counters || initialState;

export const selectCounters = createSelector([selectSlice], state => state);
