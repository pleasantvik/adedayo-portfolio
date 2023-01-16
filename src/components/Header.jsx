import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SideDrawer } from "./SideDrawer";
import classes from "./Header.module.css";

export const Header = () => {
  //State For opening and closing drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Handle the styling of the header base on scroll position
  const [headerShow, setHeaderShow] = useState(false);
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      // console.log("scrolling");
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
      // console.log("back to top");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  // SCROLLING

  return (
    <AppBar
      sx={{
        backgroundColor: headerShow ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 10px",
      }}
    >
      <Toolbar>
        <div className={classes.header_logo}>
          <div className={classes.header_logo_venue}>Adedayo Victor</div>
          <div className={classes.header_logo_title}>portfolio website</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};
