import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Dane Bootstrap" },
  { id: 2, name: "Sack Sparrow" },
  { id: 3, name: "Steven Smith" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
