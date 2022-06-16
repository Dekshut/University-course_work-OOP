import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    role: '',
    favorite: {}
  },
  reducers: {
    setLoading(state, { payload }) {
      // console.log(payload);
      state.loading = payload;
    }
  }
})

export default appSlice.reducer

export const { setLoading } = appSlice.actions