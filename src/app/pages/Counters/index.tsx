/**
 *
 * Counters
 *
 */
import React, { useEffect } from 'react';
//import { useEffect } from 'react';
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
  const addCounter = (id: number) => {
    dispatch(actions.addCounterGG(id));
  };

  useEffect(() => {
    dispatch(actions.startLoadCounters());
  }, [actions, dispatch]); //GIA: funzione {} e array [] delle dipendenze.

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
      <button
        onClick={() =>
          addCounter(
            Math.max.apply(
              Math,
              counters.map(function (o) {
                return o.id + 1;
              }),
            ),
          )
        }
      >
        Add Counter GG
      </button>
      <button onClick={() => dispatch(actions.addCounterLB())}>
        Add Counter LB
      </button>
    </Div>
  );
}

const Div = styled.div``;
