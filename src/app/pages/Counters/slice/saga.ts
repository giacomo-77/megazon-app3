import { PayloadAction } from '@reduxjs/toolkit';
import {
  take,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { request } from 'utils/request';
import { countersActions as actions } from '.';
import { selectCounters } from './selectors';
import { Counter } from './types';

// function* doSomething() {}
function* loadCounters() {
  //fetch('http://localhost:3001').then;
  //GIA: l'effetto call come parametri vuole una funzione ed i parametri da passare alla funzione stessa.
  let counters: Counter[] = yield call(
    request,
    'http://localhost:3001/counters',
  );
  //GIA: potrei usare "dispatch", ma non sarebbe bene utilizzarla in una saga.
  yield put(actions.loadCountersDone(counters));
}

function* updateCounter(action: PayloadAction<number>) {
  //PayloadAction<number>: PayloadAction che riceve un number.
  //GIA: in saga si fa così per recuperare un certo ... del nostro stato:
  const counters: Counter[] = yield select(selectCounters);
  const counter = counters.find(counter => counter.id === action.payload);
  console.log(counter);
  //GIA: il punto esclamativo dice a TypeScript che siamo sicuri che 'counter' non è nullo.
  yield call(request, `http://localhost:3001/counters/${counter!.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(counter),
  });
}

//GIA: è una funzione generatrice, che ritorna un iteratore, ovvero qualcosa su cui posso chiamare "next"... è una funzione che ritorna più valori;
//     gli effetti della libreria saga (take, call, put, select, takeLatest) gli dicono cosa fare.
export function* countersSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.startLoadCounters.type, loadCounters);
  //GIA: ora vogliamo che tutti gli incrementi vengano registrati.
  yield takeEvery(actions.incrementCounter.type, updateCounter);
  //GIA: decremento.
  yield takeEvery(actions.decrementCounter.type, updateCounter);
}
