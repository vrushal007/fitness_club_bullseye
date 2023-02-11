import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './FeedbackList.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function FeedbackList(props) {
  const {DUMMY_DATA} = props
    const tableData = <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Email</StyledTableCell>
          <StyledTableCell>Phone</StyledTableCell>
          <StyledTableCell>Address</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {DUMMY_DATA.map((item) => (
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {item.name}
            </StyledTableCell>
            <StyledTableCell >{item.email}</StyledTableCell>
            <StyledTableCell >{item.phone}</StyledTableCell>
            <StyledTableCell >{item.address}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    return (
      <div className={classes.list}>
        <h1>Member List</h1>
        {tableData}
        <Link to='/login' style={{textDecoration:'none'}}><Button type="submit" variant="contained" style={{ background: 'goldenrod', borderRadius: 0, padding: '10px 20px', margin: '20px', alignItems: 'center' }}>Go Back</Button></Link>
      </div>
    );
}

export default FeedbackList