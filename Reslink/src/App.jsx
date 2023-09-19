import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box } from "@mui/material";
import Side from "./assets/components/Side";
import Mainpage from "./assets/components/Mainpage";


function App() {
  return (
    <>
     
      <Box sx={{
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        
      }}>
        
        <Side/>
        <Mainpage/>
      </Box>
   </>
  );
}

export default App;
