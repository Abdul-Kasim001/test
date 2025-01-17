import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar/Navbar";
import Interview from "../Interview/Interview";
import AdbIcon from "@mui/icons-material/Adb";
import BadgeIcon from "@mui/icons-material/Badge";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";
import { shadows } from "@mui/system";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "hsl(203deg 100% 50%)" }}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          className="logicbee"
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            // mr: 1,
            display: { xs: "flex", md: "flex" },
            fontFamily: "poppins",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGIGBEE
        </Typography>
      </Toolbar>
      {/* <List>
        {["Employee", "Client", "Project", "Interview"].map(
          (text, index, path) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <BadgeIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List> */}
      <List style={{ fontFamily: "poopins" }}>
        <NavLink
          to="/employee"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "tracking-nav-link active" : "tracking-nav-link"
          }
        >
          <BadgeIcon /> &nbsp;&nbsp; Employee
        </NavLink>

        <NavLink
          to="/client"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "tracking-nav-link active" : "tracking-nav-link"
          }
        >
          <MailIcon />
          &nbsp;&nbsp; Client
        </NavLink>

        <NavLink
          to="/process"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "tracking-nav-link active" : "tracking-nav-link"
          }
        >
          <InboxIcon />
          &nbsp;&nbsp; Project
        </NavLink>

        <NavLink
          to="/interview"
          style={{ textDecoration: "none" }}
          className={({ isActive }) =>
            isActive ? "tracking-nav-link active" : "tracking-nav-link"
          }
        >
          <BadgeIcon />
          &nbsp;&nbsp; Interview
        </NavLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "hsl(203deg 100% 50%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            backgroundColor="hsl(203deg 100% 50%)"
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" width="200vh">
            <Navbar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "hsl(203deg 100% 50%)",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          className="temple-nav-link px-4 py-2"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "hsl(203deg 100% 50%)",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph></Typography>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window: PropTypes.func,
};

export default Sidebar;
