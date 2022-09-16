import { configureStore } from "@reduxjs/toolkit";
import employeeListSlice from "../components/EmployeeList/employeeListSlice";
const store = configureStore({
  reducer: {
    employeeList: employeeListSlice,
  },
});

export default store;
