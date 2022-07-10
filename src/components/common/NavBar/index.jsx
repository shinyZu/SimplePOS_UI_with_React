import React, { Component, Fragment } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MenuIcon from "@mui/icons-material/Menu";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  changePage(e) {
    console.log(e);
    console.log("Page Changed...");
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.navBar}>
        <Tabs
          // value={value}
          onChange={(e) => this.changePage()}
          className={classes.navTabs}
        >
          <div className={classes.navDashBoard}>
            <Tab icon={<MenuIcon />} label="Dashboard" />
          </div>
          <div className={classes.navPages}>
            <Tab icon={<PersonIcon />} label="Customers" />
            <Tab icon={<ShoppingBagIcon />} label="Store" />
            <Tab icon={<LocalGroceryStoreIcon />} label="Orders" />
          </div>
        </Tabs>
      </Box>
    );
  }
}
export default withStyles(styleSheet)(NavBar);
