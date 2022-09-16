import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Employee from "../Employee/Employee";
import { getUsers } from "./employeeListSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { employees, status } = useSelector((state) => state.employeeList);
  return (
    <div>
      <h1>Employee List: {status} </h1>
      {employees.map((employee, i) => (
        <Employee data={employee} key={i} />
      ))}
    </div>
  );
};

export default EmployeeList;
