import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState, useEffect } from "react";
import Loader from "../Loader";
import { SINGLE_LIST } from "../Routes";
import { Link, generatePath } from "react-router-dom";
import Api from "../api.js/api";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.black,
    border:'2px solid black',
  },
  body: {
    fontSize: 14,
    border:'1px solid black',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.getProductList()
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const classes = useStyles();

  return (
    
     
      <TableContainer component={Paper}>
        <Loader isLoading={loading}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Title</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el) => (
                <StyledTableRow key={el.id}>
                  <StyledTableCell component="th" scope="row">
                    {el.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link
                      to={generatePath(SINGLE_LIST, {
                        id: el.id,
                      })}
                    ></Link>
                    {el.price}
                  </StyledTableCell>
                 
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Loader>
      </TableContainer>
  );
}