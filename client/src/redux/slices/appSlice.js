import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isAdmin: false,
    email: '',
    favorite: {},
    loading: false,
    allColors: [],
    allCategories: []
  },
  reducers: {
    changeUserRole(state, { payload }) {
      state.isAdmin = payload;
    },
    changeUserEmail(state, { payload }) {
      state.email = payload;
    },
    logout(state) {
      state.email = '';
      state.isAdmin = false
    },
    changeLoading(state, {payload}) {
      state.loading = payload;
    },
    changeAllColors(state, {payload}){
      state.allColors = payload;
    },
    changeAllCategories(state, { payload }) {
      state.allCategories = payload;
    }
  }
})

export default appSlice.reducer

export const { changeUserRole, changeUserEmail, logout, changeLoading, changeAllCategories, changeAllColors } = appSlice.actions