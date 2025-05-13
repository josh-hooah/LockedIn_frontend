import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Chart from "react-google-charts";

const Dashboard = ({ finishedTasks, unfinishedTasks, productivityLevel }) => {
  const chartData = [
    ['Task Status', 'Count'],
    ['Finished Tasks', finishedTasks.length],
    ['Unfinished Tasks', unfinishedTasks.length],
    ['Productivity Level', productivityLevel],
  ];

  const chartOptions = {
    title: 'Task Breakdown',
    is3D: true,
    slices: {
      0: { offset: 0.1 }, // Finished Tasks
      1: { offset: 0.1 }, // Unfinished Tasks
      2: { offset: 0.1 }, // Productivity Level
    },
    pieSliceText: 'percentage',
    legend: { position: 'top' },
    pieStartAngle: 100,
  };

  return (
    <Box sx={{ px: 3, py: 3 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom align="center">
            Task Statistics Overview
          </Typography>
            <Chart
            chartType="PieChart"
            data={chartData}
            options={chartOptions}
            width="100%" 
            height={{ xs: "250px", sm: "400px", md: "500px" }}  // Responsive height
            />

        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
