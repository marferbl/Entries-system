import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonComponent from "../base/button";
import AvatarComponent from "../base/avatar";
import axios from "axios";
import { config } from "../../utils/axios-config";
import { TimeWorked } from "../base/time-worked";
import BasicMenu from "../base/basic-menu";

export default function EmployeeCard({ employee, getEntries }) {
  const { id, firstName, lastName, workStatus, imageProfileURL } = employee.employee;
  const { workEntryIn, workEntryOut } = employee;
  const [isPaused, setIsPaused] = useState(false);

  const toggleState = () => {
    const url = workStatus == "online" ? "/clock-out" : "/clock-in";
    url === "/clock-in" && setIsPaused(false);
    axios
      .post(
        process.env.REACT_APP_BASE_URL + url,
        {
          employeeId: id,
          workEntryOut: {
            coordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        },
        config
      )
      .then((response) => {
        console.log(response);
        getEntries();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 60,
          justifyContent: "space-around",
          background: "#e7e7e7",
          marginBottom: 2,
          borderRadius: 10,
          paddingX: 3,
          fontFamily: "Roboto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            minWidth: "250px",
            alignItems: "center",
            justifyContent: "space-around",
            borderRight: "1px solid gray",
            paddingRight: 3,
          }}
        >
          <TimeWorked workEntryDate={workEntryIn} workExitDate={workEntryOut} isWorking={workStatus == "online" && !isPaused} />
          {workStatus == "online" && (
            <ButtonComponent color="white" bg="#b5b5b5" onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? "Reanudar" : "Pausar"}
            </ButtonComponent>
          )}
          <ButtonComponent color="white" bg={workStatus == "online" ? "#ff9984" : "#5ebea3"} onClick={toggleState}>
            {workStatus == "online" ? "Salir" : "Entrar"}
          </ButtonComponent>
        </Box>
        <Box
          sx={{
            display: "flex",
            minWidth: "200px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AvatarComponent
            url={imageProfileURL ? imageProfileURL : "https://cdn-icons-png.flaticon.com/512/219/219983.png"}
            w={34}
            h={34}
            connected={workStatus === "online" ? true : false}
          />
          <BasicMenu>
            <Box
              sx={{ color: "black", fontWeight: "bold", textTransform: "none", fontSize: 17 }}
            >{`${firstName} ${lastName}`}</Box>
          </BasicMenu>
        </Box>
      </Box>
    </div>
  );
}
