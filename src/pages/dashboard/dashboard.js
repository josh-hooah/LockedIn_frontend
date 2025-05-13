import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./taskContext"; // Import the TaskProvider
import SetTask from "./settask";
import Dashboard from "./dash";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const MainDashBoard = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(36, 4, 36)", // Use the provided color
      },
    },
  });

  return (
    // <TaskProvider>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //       <Routes>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/set-task" element={<SetTask />} />
    //       </Routes>
    //   </ThemeProvider>
    // </TaskProvider>

    return (
      <div></div>
    )
  );
};

export default MainDashBoard;
