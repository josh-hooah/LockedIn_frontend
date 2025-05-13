// SignupPage.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import "./signup.css";

export default function SignupPage({ onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (name && email && number && password) {
      const newUser = { name, email, number, password };
      localStorage.setItem("newUser", JSON.stringify(newUser));
      onSignup(newUser); // Call onSignup to pass the user data to the parent
      setError(""); // Clear any previous errors
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        className="signup-card ssc"
        elevation={4}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          className="signup-svg"
          width="100%"
          height="150"
          viewBox="0 0 800 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7b2cbf" stopOpacity="1" />
              <stop offset="100%" stopColor="#3c096c" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" rx="20" />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Verdana, sans-serif"
            fontSize="32"
            fill="white"
          >
            LockedIn AI
          </text>
        </svg>

        <Typography variant="h5" align="center" gutterBottom>
          Sign Up for LockedIn AI
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="WhatsApp Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <Link to ='/dashboard' style= {{}}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          </Link >
        </Box>
        <div className = 'dha'>
          Already have a account? <Link to = '/login' >Login </Link>
        </div>
      </Paper>

      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={() => setError("")}
      >
        <Alert onClose={() => setError("")} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
