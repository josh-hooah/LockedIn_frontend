import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    title: "Welcome to LockedIn AI",
    description: "We help you attain you goal.",
    bg: "#7b2cbf",
  },
  {
    title: "Stay Organized",
    description: "Sort, filter, and manage your tasks effortlessly.",
    bg: "#3c096c",
  },
  {
    title: "Focus",
    description: "we help Track your tasks with precision and stay focused.",
    bg: "#24023a",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <h2> What We Do </h2>
      <Box
        sx={{
          position: "relative",
          height: 300,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: slides[index].bg,
              color: "white",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {slides[index].title}
            </Typography>
            <Typography variant="body1">{slides[index].description}</Typography>
          </motion.div>
        </AnimatePresence>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="outlined" onClick={handlePrev} borderColor= 'purple'>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
}
