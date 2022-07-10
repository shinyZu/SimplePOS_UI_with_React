import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyForm from "../../components/common/Form";
import MyTable from "../../components/common/Table";
import { d, createRow } from "../../components/common/Table";

class CustomerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [{ label: "Male" }, { label: "Female" }],
      obj: { col1: "", col2: "", col3: "", col4: "" },
    };
  }

  addCustomer(cust) {
    this.state.obj.col1 = cust.txt1;
    this.state.obj.col2 = cust.txt2;
    this.state.obj.col3 = cust.txt3;
    this.state.obj.col4 = cust.txt4;
    this.setState({ cust });
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
          onSave={(cust) => {
            this.addCustomer(cust);
          }}
        />
        <MyTable
          column1="NIC"
          column2="Name"
          column3="Gender"
          column4="Email"
          data={this.state.obj}
        />
      </Fragment>
    );
  }
}
export default CustomerPage;
