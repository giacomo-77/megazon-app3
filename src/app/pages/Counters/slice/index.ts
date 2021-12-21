import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { countersSaga } from './saga';
import { CountersState } from './types';

export const initialState: CountersState = {
  counters: [
    { id: 0, value: 0 },
    { id: 1, value: 0 },
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
    addCounter(state, action: PayloadAction<number>) {
      state.counters = [...state.counters, { id: action.payload, value: 0 }];
    },
    addCounterLB(state) {
      const maxId = state.counters.reduce(
        (a, v) => (v.id > a ? v.id : a),
        //GIA: il valore iniziale di 'a'.
        Number.MIN_SAFE_INTEGER,
      );
      state.counters.push({ id: maxId + 1, value: 0 });
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
