import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyCard from "../../components/common/Card";
import { styleSheet } from "../../components/common/Card/style";
import { withStyles } from "@mui/styles";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <NavBar />
        <div className={classes.container}>
          <MyCard title="CUSTOMERS" count="10" />
          <MyCard title="ITEMS" count="12" />
          <MyCard title="ORDERS" count="08" />
        </div>
      </Fragment>
    );
  }
}
export default withStyles(styleSheet)(Dashboard);
