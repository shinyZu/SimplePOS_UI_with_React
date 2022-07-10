import React, { Component, Fragment } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import MyButton from "../../../components/common/Button";
import { d } from "../../common/Table";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {
        txt1: "",
        txt2: "",
        txt3: "",
        txt4: "",
      },
    };
  }

  handleChange(e) {
    const { value, name } = e.target;
    let inputData = this.state.inputData;

    if (name == "txt1") {
      inputData.txt1 = e.target.value;
      this.setState({ inputData });
    } else if (name == "txt3") {
      inputData.txt3 = e.target.value;
      this.setState({ inputData });
    } else if (name == "txt4") {
      inputData.txt4 = e.target.value;
      this.setState({ inputData });
    } else {
      console.log(e.target.innerText);
      inputData.txt2 = e.target.innerText;
      this.setState({ inputData });
    }
    console.log(this.state.inputData);
  }

  handleSaveBtn(e) {
    console.log("clicked");
    this.props.onSave(this.state.inputData);
    // let formData = this.state.inputData;
  }

  handleClearBtn(e) {
    console.log("cleared");
    this.state.inputData.txt1 = "";
    this.state.inputData.txt2 = "";
    this.state.inputData.txt3 = "";
    this.state.inputData.txt4 = "";
    // this.setState({ inputData: { txt1: "", txt2: "", txt3: "", txt4: "" } });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.container__1}>
          <Grid container spacing={5} className={classes.grid__container}>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className={classes.grid__cell}
            >
              <TextField
                id="outlined-basic"
                placeholder={this.props.field__1}
                variant={this.props.variant}
                size={this.props.size}
                style={{ width: "80%", marginLeft: "10px", fontSize: "50px" }}
                autoComplete={this.props.auto__complete}
                name="txt1"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className={classes.grid__cell}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={this.props.list}
                sx={{ width: 300, height: 5 }}
                size={this.props.size}
                renderInput={(params) => (
                  <TextField {...params} placeholder={this.props.field__2} />
                )}
                style={{ width: "80%", marginLeft: "10px" }}
                name="txt2"
                onChange={(e) => {
                  console.log(e);
                  this.handleChange(e);
                }}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className={classes.grid__cell}
            >
              <TextField
                id="outlined-basic"
                placeholder={this.props.field__3}
                variant={this.props.variant}
                size={this.props.size}
                style={{
                  width: "80%",
                  marginLeft: "10px",
                  backgroundColor: "transparent",
                }}
                autoComplete={this.props.auto__complete}
                name="txt3"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={6}
              className={classes.grid__cell}
            >
              <TextField
                id="outlined-basic"
                placeholder={this.props.field__4}
                variant={this.props.variant}
                size={this.props.size}
                style={{ width: "80%", marginLeft: "10px" }}
                autoComplete={this.props.auto__complete}
                name="txt4"
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
            </Grid>
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              lg={12}
              style={{
                display: "flex",
                marginRight: "8.5%",
                height: "60px",
                paddingTop: "15px",
              }}
              justifyContent="flex-end"
              className={classes.grid__cell}
            >
              <MyButton
                variant={this.props.variant}
                label={this.props.btn__clear}
                style={{
                  backgroundColor: "#747d8c",
                  color: "white",
                  marginRight: "15px",
                  borderColor: "#747d8c",
                }}
                onClick={(e) => {
                  this.handleClearBtn(e);
                }}
              />
              <MyButton
                variant={this.props.variant}
                label={this.props.btn__save}
                style={{
                  backgroundColor: "#17878f",
                  color: "white",
                  width: "100px",
                  borderColor: "#17878f",
                }}
                onClick={(e) => {
                  this.handleSaveBtn(e);
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styleSheet)(MyForm);
// export default MyForm;
