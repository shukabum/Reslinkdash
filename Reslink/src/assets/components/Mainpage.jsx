import * as React from "react";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import { Box } from "@mui/system";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Button, Typography } from "@mui/material";
import l1 from "../../assets/frame1.png";
import l2 from "../../assets/frame2.png";
import l3 from "../../assets/frame3.png";
import l4 from "../../assets/frame4.png";
import Log from "../log";
import { MenuBookOutlined } from "@mui/icons-material";

export default function CustomizedInputBase() {
  const listdisp = [
    {
      count: "07",
      text: "Active Projects",
      add: l1,
    },
    {
      count: "04",
      text: "Proposals",
      add: l2,
    },
    {
      count: "03",
      text: "Active Jobs",
      add: l3,
    },
    {
      count: "240",
      text: "Application",
      add: l4,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "#2c2d33",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 90 },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              ml: 1,
            }}
          >
            <Log />
          </Box>
          <Box
            sx={{
              mt: 3,
              ml: 4,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              background: "#1F2129",
              width: "250px",
              borderRadius: "20px",
              height: "30px",
            }}
          >
            <SearchIcon
              sx={{
                color: "white",
                width: "20px",
                ml: 2,
              }}
            />

            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <NotificationsIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mt: 3.3,
                fontSize: "25px",

                color: "white",
              }}
            />
            <Box
              sx={{
                display: "flex",
                background: "#3FA268",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                width: "200px",
                borderRadius: "20px",
                mt: 2.2,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                + Create New Project
              </Typography>
            </Box>
            
              <MenuBookOutlined

                sx={{
                    display:{xs:'flex',md:'none'},
                  fontSize: "30px",
                  color: "#3FA268",
                  mt: 3,
                
                }}
                
              />
       
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 10,
            ml: 4,
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              lineHeight: "38px",
              color: "white",
              fontSize: "30px",
            }}
          >
            Welcome back, Olivia
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              lineHeight: "38px",
              color: "white",
              fontSize: "16px",
            }}
          >
            Track, manage researchers and submissions.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            gap: 5,
            mt: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {listdisp.map((e) => (
            <Box
              sx={{
                background: "#555761",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "244px",
                height:'122px',
                padding: "24px",
                gap: 6 ,
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    ml: 0,
                    fontSize: "30px",
                  }}
                >
                  {e.count}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    color: "white",
                  }}
                >
                  {e.text}
                </Typography>
              </Box>
              <Avatar alt="Remy Sharp" src={e.add} sx={{
                height:'40px',
                width:'40px'
              }}/>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
