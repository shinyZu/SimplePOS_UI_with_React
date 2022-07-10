import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
// import MyCard from "../../components/common/Card";
// import { styleSheet } from "../../components/common/Card/style";
// import { withStyles } from "@mui/styles";

class CustomerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <NavBar />
      </Fragment>
    );
  }
}
export default CustomerPage;
