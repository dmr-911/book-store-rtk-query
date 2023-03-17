const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: "",
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchBooks: (state, action) => {
      state.search = action.payload;
    },

    filterBooks: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searchBooks, filterBooks } = filterSlice.actions;
