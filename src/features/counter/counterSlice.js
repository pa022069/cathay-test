import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    undone: [],
    done: []
  },
  reducers: {
    saveData: (state, action) => {
      let done = action.payload.filter((item) => {
        return item.status.code === 3 || item.status.code === 4;
      });
      state.done = done.sort(function(a,b) {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
      });

      let undone = action.payload.filter((item) => {
        return item.status.code === 1 || item.status.code === 2;
      });
      state.undone = undone.sort(function(a,b) {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
      });
    },
  },
});

export const { saveData } = counterSlice.actions;

export const getDone = state => state.counter.done;
export const getUnDone = state => state.counter.undone;

export default counterSlice.reducer;

