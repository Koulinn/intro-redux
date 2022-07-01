// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const arrayOfUsers = [
  {
    id: 1,
    email: "test@mail.com",
    name: "John Snow",
    password: "123",
  },
  {
    id: 2,
    email: "test2@mail.com",
    name: "Marta Snow",
    password: "123",
  },
  {
    id: 3,
    email: "test3@mail.com",
    name: "Berta Snow",
    password: "123",
  },
];

// AsyncThunk: getUserDetails
export const getUserDetails = createAsyncThunk(
  "userDetails/getUserDetails",
  async (arg, { getState }) => {}
);

export const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    name: "",
    email: "",
    id: "",
  },
  reducers: {},
  extraReducers: {
    [getUserDetails.pending]: (state, action) => {},
    [getUserDetails.fulfilled]: (state, { payload }) => {},
    [getUserDetails.rejected]: (state, action) => {},
  },
});

export const {} = userSlice.actions;

// Reducer: userSlice.reducer
export default userSlice.reducer;
