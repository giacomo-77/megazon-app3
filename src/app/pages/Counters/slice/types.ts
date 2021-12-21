/* --- STATE --- */
export interface CountersState {
  counters: Counter[];
}

export interface Counter {
  id: number;
  value: number;
}
