import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("employeeList/getUsers", async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const employeeListSlice = createSlice({
  name: "employeeList",
  initialState: {
    employees: [],
    status: "No data",
  },
  reducers: {
    //actions
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.employees = action.payload;
      state.status = "Found data!";
    },
    [getUsers.pending]: (state, action) => {
      state.status = "Loading data...";
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "Failed to get data";
    },
  },
});

export default employeeListSlice.reducer;
