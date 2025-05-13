import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import logo from '../../images/Lockedin_Icon only.png'

const navItems = ["Home", "Game", "Login"];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: "rgb(36, 4, 36)" }}>
        <Toolbar>
          <img src = {logo} alt = '' style = {{width : "50px", height : "50px"}} />
          <Typography variant="h6" sx={{ flexGrow: 1 }} className = 'vvv' style = {{display: "flex", alignSelf : "center", alignItems: "center"}}>
          <Link to = '/' className = 'header-logo' >
           <svg style = {{width : "200px", height : "100px"}} viewBox="0 0 300 100">
                <>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor : "#7b2cbf", stopOpacity:1 }} />
                  <stop offset="100%" style={{stopColor:"#3c096c", stopOpacity:1}} />
                </linearGradient>
              </>
           
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Verdana, sans-serif"
                fontSize="32"
                fill="url(#grad1)"
              >
                LockedIn AI
              </text>

           </svg>
          </Link>
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={2}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                 <Link to = '/'> <Button style = {{color:"white"}}>Home</Button> </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to ='/focusgame' ><Button style = {{color:"white"}}>Game</Button></Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to ='/about'><Button style = {{color:"white"}}>About</Button></Link>
                </motion.div>
            </Box>
          )}
        </Toolbar> 
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 200 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
                {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                 <Link to = '/'> <Button color="inherit">Home</Button> </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to ='/focusgame' ><Button color="inherit">Game</Button></Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to ='/login'><Button color="inherit">Login</Button></Link>
                </motion.div> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
