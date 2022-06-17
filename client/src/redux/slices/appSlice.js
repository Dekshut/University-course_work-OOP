import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFavoriten = createAsyncThunk(
  'app/favoriten',
  async (userId, thunkAPI) => {
    const favorites = await fetch(`http://localhost:8080/api/fav/${userId}`).then(response => {
      if (response.ok) {
        return response.json()
      }

      return response.json().then(error => {
        const e = new Error('Smth gone wrong')
        e.data = error
        throw e
      })
    });

    return favorites.data
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState: {
    userId: null,
    isAdmin: false,
    email: '',
    favorite: [],
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
    changeLoading(state, { payload }) {
      state.loading = payload;
    },
    changeAllColors(state, { payload }) {
      state.allColors = payload;
    },
    changeAllCategories(state, { payload }) {
      state.allCategories = payload;
    },
    changeUserId(state, { payload }) {
      state.userId = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getFavoriten.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getFavoriten.fulfilled, (state, { payload }) => {
      state.favorite = payload;
      state.loading = false;
    })
  }
})

export default appSlice.reducer

export const { changeUserRole, changeUserEmail, logout, changeLoading, changeAllCategories, changeAllColors, changeUserId } = appSlice.actions