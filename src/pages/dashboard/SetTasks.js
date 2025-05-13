import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useTasks } from "./taskContext"; // Import the context

const SetTask = () => {
  const { tasks, setTasks } = useTasks();
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleAddTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: input.trim(), completed: false, dueDate },
    ]);
    setInput("");
    setDueDate(null);
  };

  return (
    <Paper sx={{ p: 3, my: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Task Manager
      </Typography>
      <Box display="flex" gap={2} justifyContent="space-between" mb={2}>
        <TextField
          fullWidth
          label="Add a new task"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TextField
          fullWidth
          label="Due date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={handleAddTask}
        fullWidth
      >
        Add Task
      </Button>
      <Divider sx={{ my: 2 }} />
    </Paper>
  );
};

export default SetTask;
