import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

export const TimeWorked = ({ workEntryDate, workExitDate, isWorking }) => {
  const entry = workEntryDate.date;
  const exit = workExitDate.date;
  const [timeWorked, setTimeWorked] = useState();

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    if (isWorking) {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isWorking]);

  useEffect(() => {
    setTimeWorked(timeWorked + 1);
  }, [time]);

  function getSecondsDiff(startDate, endDate) {
    const msInSecond = 1000;
    let seconds = Math.round(Math.abs(endDate - startDate) / msInSecond);
    setTimeWorked(seconds);
  }

  const getStringFromSeconds = () => {
    var date = new Date(0);
    date.setSeconds(timeWorked);
    var timeString = date.toISOString().substring(11, 19);
    return timeString;
  };

  useEffect(() => {
    entry && exit && getSecondsDiff(new Date(entry), exit ? new Date(exit) : new Date());
  }, [entry, exit]);

  return <Box>{timeWorked && getStringFromSeconds(timeWorked)}</Box>;
};
