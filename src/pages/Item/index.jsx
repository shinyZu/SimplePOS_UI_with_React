import React, { Component, Fragment } from "react";
import NavBar from "../../components/common/NavBar";
import MyForm from "../../components/common/Form";
import MyTable from "../../components/common/Table";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [{ label: "Soap" }, { label: "Milk" }, { label: "Eggs" }],
      obj: { col1: "", col2: "", col3: "", col4: "" },
    };
  }

  addItem(item) {
    this.state.obj.col1 = item.txt1;
    this.state.obj.col2 = item.txt2;
    this.state.obj.col3 = item.txt3;
    this.state.obj.col4 = item.txt4;
    this.setState({ item });
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
          onSave={(item) => {
            this.addItem(item);
          }}
        />
        <MyTable
          column1="Item Code"
          column2="Description"
          column3="Unit Price"
          column4="Qty On Hand"
          data={this.state.obj}
        />
      </Fragment>
    );
  }
}
export default ItemPage;
