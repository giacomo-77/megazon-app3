/**
 *
 * Counters
 *
 */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useCountersSlice } from './slice';
import { selectCounters } from './slice/selectors';

interface Props {}

export function Counters(props: Props) {
  const { actions } = useCountersSlice();
  const dispatch = useDispatch();
  const counters = useSelector(selectCounters);

  const incrementCounter = (id: number) => {
    dispatch(actions.incrementCounter(id));
  };
  const decrementCounter = (id: number) => {
    dispatch(actions.decrementCounter(id));
  };

  return (
    <Div>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>
            Counter {counter.id}: {counter.value}
            <button onClick={() => incrementCounter(counter.id)}>+</button>
            <button onClick={() => decrementCounter(counter.id)}>-</button>
          </li>
        ))}
      </ul>
    </Div>
  );
}

const Div = styled.div``;
