import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyCard from "../../components/common/Card";
// import { styleSheet } from "../../components/common/Card/style";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
          <div className={classes.card__container}>
            <MyCard
              title="CUSTOMERS"
              count="10"
              bgColor="#74b9ff"
              icon={
                <PeopleAltIcon style={{ color: "white", fontSize: "180px" }} />
              }
            />
            <MyCard
              title="ITEMS"
              count="12"
              icon={
                <CategoryIcon style={{ color: "white", fontSize: "180px" }} />
              }
            />
            <MyCard
              title="ORDERS"
              count="08"
              icon={
                <ShoppingCartIcon
                  style={{ color: "white", fontSize: "180px" }}
                />
              }
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(styleSheet)(Dashboard);
