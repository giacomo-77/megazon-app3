import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { countersSaga } from './saga';
import { Counter, CountersState } from './types';

export const initialState: CountersState = {
  counters: [
    /*{ id: 0, value: 0 },
    { id: 1, value: 0 },*/
  ],
};

const slice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    //GIA: reducer che viene eseguito dallo store nel momento in cui viene eseguita l'action che come payload ha l'id del contatore;
    //     la PayloadAction ha in sè il tipo di azione ed un valore di cui apriori non so il tipo.
    incrementCounter(state, action: PayloadAction<number>) {
      const counter = state.counters.filter(
        counter => counter.id === action.payload,
      )[0];
      counter.value = counter.value + 1;
    },
    decrementCounter(state, action: PayloadAction<number>) {
      const counter = state.counters.filter(
        counter => counter.id === action.payload,
      )[0];
      counter.value = counter.value - 1;
    },
    addCounterLB(state) {},
    startLoadCounters(state) {
      state.counters = [];
    },
    loadCountersDone(state, action: PayloadAction<Counter[]>) {
      state.counters = action.payload;
    },
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: countersActions } = slice;

export const useCountersSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: countersSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCountersSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
