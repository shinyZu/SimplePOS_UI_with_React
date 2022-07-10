import React, { Component, Fragment } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import MyButton from "../../../components/common/Button";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: [{ label: "Male" }, { label: "Female" }],
      descriptions: [{ label: "Soap" }, { label: "Milk" }, { label: "Eggs" }],
    };
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
