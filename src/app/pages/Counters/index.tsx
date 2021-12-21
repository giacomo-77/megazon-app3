/**
 *
 * Counters
 *
 */
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useCountersSlice } from './slice';
import { selectCounters } from './slice/selectors';

interface Props {}

export function Counters(props: Props) {
  let { actions } = useCountersSlice();
  let counters = useSelector(selectCounters);
  return (
    <Div>
      <ul>
        {counters.map(counter => (
          <li key={counter.id}>
            Counter {counter.id}: {counter.value}
          </li>
        ))}
      </ul>
    </Div>
  );
}

const Div = styled.div``;
