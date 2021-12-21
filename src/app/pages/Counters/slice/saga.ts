import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { countersActions as actions } from '.';
import { Counter } from './types';

// function* doSomething() {}
function* loadCounters() {
  //fetch('http://localhost:3001').then;
  //GIA: l'effetto call come parametri vuole una funzione ed i parametri da passare alla funzione stessa.
  let counters: Counter[] = yield call(
    request,
    'http://localhost:3001/counters',
  );
  yield put(actions.loadCountersDone(counters));
}

export function* countersSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.startLoadCounters.type, loadCounters);
}
