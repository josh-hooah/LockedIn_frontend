import React, { useState, useEffect } from "react";
import { Container, Paper, Box, Typography, Grid } from "@mui/material";
import { Chart } from "react-google-charts";

const Dashboard = ({user}) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Calculate the stats for the tasks
  const finishedTasks = tasks.filter(task => task.completed && new Date(task.dueDate) >= new Date());
  const failedTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < new Date());
  const totalTasks = tasks.length;

  // Calculate the productivity level
  const productivityLevel = totalTasks > 0 ? ((totalTasks - failedTasks.length) / totalTasks) * 100 : 0;

  // Data for the chart
  const chartData = [
    ["Task Type", "Count"],
    ["Finished Tasks", finishedTasks.length],
    ["Failed Tasks", failedTasks.length],
    ["Unfinished Tasks", totalTasks - (finishedTasks.length + failedTasks.length)],
  ];

  const chartOptions = {
    title: "Task Overview",
    is3D: true,
    slices: {
      0: { offset: 0.1, color: "#4caf50" }, // Finished task (green)
      1: { offset: 0.1, color: "#f44336" }, // Failed task (red)
      2: { offset: 0.1, color: "#ff9800" }, // Unfinished task (orange)
    },
    legend: {
      position: "labeled", 
    },
    tooltip: {
      trigger: "selection", // Show the tooltip when a slice is selected
    },
    pieSliceText: "percentage", // Display percentage on the chart
    chartArea: {
      width: "100%",
      height: "75%",
    },
  };

  return (
    <Container maxWidth="md">
      <h3>Welcome! {user} {console.log(user)} </h3>
      <Paper elevation={3} sx={{ p: 3, my: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Dashboard Overview
        </Typography>
        
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6">Finished Tasks: {finishedTasks.length}</Typography>
          <Typography variant="h6">Failed Tasks: {failedTasks.length}</Typography>
          <Typography variant="h6">Unfinished Tasks: {totalTasks - (finishedTasks.length + failedTasks.length)}</Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Chart
              chartType="PieChart"
              data={chartData}
              options={chartOptions}
              width={"100%"}
              height={"300px"}
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6">
            Productivity Level: {productivityLevel.toFixed(2)}%
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;
