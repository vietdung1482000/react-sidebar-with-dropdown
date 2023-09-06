import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import Sidebar from "../common/Sidebar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 3,
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;