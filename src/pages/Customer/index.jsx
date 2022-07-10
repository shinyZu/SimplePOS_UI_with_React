import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyForm from "../../components/common/Form";
import MyTable from "../../components/common/Table";

class CustomerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [{ label: "Male" }, { label: "Female" }],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <NavBar />
        <MyForm
          field__1="Customer NIC"
          field__2="Gender"
          field__3="Customer Name"
          field__4="Customer Email"
          variant="outlined"
          size="small"
          btn__save="Save"
          btn__clear="Clear"
          auto__complete="off"
          list={this.state.gender}
        />
        <MyTable />
      </Fragment>
    );
  }
}
export default CustomerPage;
