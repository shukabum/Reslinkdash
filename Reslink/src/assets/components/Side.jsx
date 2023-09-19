import { Box } from "@mui/system";
import React from "react";
import Log from "../log";
import { Avatar, Button, Typography } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import ava from "../../assets/Avatar.png";
const Side = () => {
  const butlist = [
    {
      name: "Dashboard",
      logo: <LeaderboardIcon />,
    },
    {
      name: "Projects",
      logo: <LayersIcon />,
    },
    {
      name: "Staffing",
      logo: <PeopleIcon />,
    },
    {
      name: "Messages",
      logo: <MessageIcon />,
    },
  ];
  const botlist = [
    {
      name: "Setting",
      logo: <SettingsIcon />,
    },
    {
      name: "Support",
      logo: <LeaderboardIcon />,
    },
  ];
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",

        height: "100vh",
        width: { sx: 0, md: "100%" },
        background: "#2f313d",
        width: "20%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { md: "100%" },
            // ml:1,

            justifyContent: "center",
            // background:'red'
          }}
        >
          <Log />
        </Box>

        {butlist.map((e) => (
          <Button
            sx={{
              width: "70%",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              //   background: "#1F2129",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "700",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {e.logo}
              {e.name}
            </Typography>
          </Button>
        ))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 40,
            width: "70%",
            alignItems: "left",
            justifyContent: "left",
            position:'relative',
            
          }}
        >
          {botlist.map((e) => (
            <Button
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                //   background: "#1F2129",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "700",
                  mt: 1,
                  mb: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {e.logo}
                {e.name}
              </Typography>
            </Button>
          ))}
        </Box>
        <br />
        <hr width="200" style={{
          position:'absolute',
          bottom:90,
        }}></hr>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 30,
            gap: 2,
            ml: -5,
          }}
        >
          <Avatar alt="Remy Sharp" src={ava} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
              }}
            >
              Olivia Rhye
            </Typography>
            <Typography
              sx={{
                color: "white",
              }}
            >
              olivia@untitledui.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Side;
