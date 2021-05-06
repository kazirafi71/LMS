import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Card, Container, TableFooter, TablePagination } from "@material-ui/core";
import Axios from "axios";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    height: "100%",
    paddingTop: "30px",
    
  },
});

const CourseInfoTable = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);
  
    const userList = async () => {
      const user = await Axios.get("/get-courses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
       setData(user.data.courses);
      console.log(user.data.courses);
    };
  
    useEffect(() => {
      userList();
    }, []);
  
  //   const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
        <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className="bg-dark ">
                <TableCell align="center" className="text-light">Id</TableCell>
                <TableCell align="center" className="text-light" >CourseName</TableCell>
                <TableCell align="center" className="text-light">Course Thumbnail</TableCell>
                <TableCell align="center" className="text-light">Created By</TableCell>
                <TableCell align="center" className="text-light">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" align="center">
                  {row._id}
                </TableCell>
                <TableCell  align="center">
                  {row.courseName}
                </TableCell>
                <TableCell  align="center">
                    <img style={{height:"40px",width:"40px",objectFit:"contain"}} src={row.courseThumbnail} alt="" />
                  
                </TableCell>
                <TableCell  align="center">
                  {row.email}
                </TableCell>
              </TableRow>
            ))}
  
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            </TableBody>
            <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 7,10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
  
       
      </Container>
  
    );
};

export default CourseInfoTable;