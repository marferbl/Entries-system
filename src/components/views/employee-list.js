import React from "react";
import EmployeeCard from "./employee-card";
import Box from "@mui/material/Box";

export default function EmployeeList({ employeeList, getEntries }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "80vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {employeeList?.slice(0, 1).map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} getEntries={getEntries} />
      ))}
    </Box>
  );
}
