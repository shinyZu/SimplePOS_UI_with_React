import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyForm from "../../components/common/Form";
import MyTable from "../../components/common/Table";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [{ label: "Soap" }, { label: "Milk" }, { label: "Eggs" }],
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <NavBar />
        <MyForm
          field__1="Item Code"
          field__2="Description"
          field__3="Unit Price"
          field__4="Qty On Hand"
          variant="outlined"
          size="small"
          btn__save="Save"
          btn__clear="Clear"
          auto__complete="off"
          list={this.state.descriptions}
        />
        <MyTable />
      </Fragment>
    );
  }
}
export default ItemPage;
