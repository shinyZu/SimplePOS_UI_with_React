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

// function d(a, b, c, d) {
//   console.log("imported functioon from Table Component");
//   console.log(a);
// }

// function createRow(col1, col2, col3, col4) {
//   console.log("mmmmmmm");
//   return { col1, col2, col3, col4 };
// }

class MyTable extends Component {
  constructor(props) {
    super(props);
  }

  createData(col1, col2, col3, col4) {
    return { col1, col2, col3, col4 };
  }

  render() {
    const rows = [];
    rows.push(
      this.createData(
        this.props.data.col1,
        this.props.data.col2,
        this.props.data.col3,
        this.props.data.col4
      )
    );

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
                // key={row.col1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.col1}
                </TableCell>
                <TableCell>{row.col3}</TableCell>
                <TableCell>{row.col2}</TableCell>
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
// export { d, createRow };
