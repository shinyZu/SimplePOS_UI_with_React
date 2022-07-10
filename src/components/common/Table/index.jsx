import React, { Component, Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";

class MyTable extends Component {
  constructor(props) {
    super(props);
  }

  createData(col1, col2, col3, col4) {
    return { col1, col2, col3, col4 };
  }

  render() {
    const rows = [
      this.createData("999999991v", "Kamal", "Male", "kamal@gmail.com"),
      this.createData("999999992v", "Nimali", "Female", "nimali@gmail.com"),
      this.createData("999999993v", "Vimal", "Male", "vimal@gmail.com"),
      this.createData("999999994v", "Amali", "Female", "amali@gmail.com"),
      this.createData("999999995v", "Bimal", "Male", "bimal@gmail.com"),
    ];

    const data = [
      this.createData("999999991v", "Kamal", "Male", "kamal@gmail.com"),
      this.createData("999999992v", "Nimali", "Female", "nimali@gmail.com"),
      this.createData("999999993v", "Vimal", "Male", "vimal@gmail.com"),
      this.createData("999999994v", "Amali", "Female", "amali@gmail.com"),
      this.createData("999999995v", "Bimal", "Male", "bimal@gmail.com"),
    ];

    const { classes } = this.props;

    return (
      <TableContainer className={classes.table__container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.table_header}>
              <TableCell>{this.props.column1}</TableCell>
              <TableCell>{this.props.column2}</TableCell>
              <TableCell>{this.props.column3}</TableCell>
              <TableCell>{this.props.column4}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.col1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.col1}
                </TableCell>
                <TableCell>{row.col2}</TableCell>
                <TableCell>{row.col3}</TableCell>
                <TableCell>{row.col4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(styleSheet)(MyTable);
