import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTableHead({datas}){
  return(
      <TableHead>
        <TableRow>
          {
            datas.map(data=><TableCell align="center">{data}</TableCell>)
          }
        </TableRow>
      </TableHead>
  );
}

function DataTableBody({datas, hover}){
  return (
      <TableBody> 
        {datas.map((data,idx)=>(
          <TableRow
          onClick={data.onClick}
          hover={hover}
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center">{data.name}</TableCell>
          <TableCell align="center">{data.when}</TableCell>
          <TableCell align="center">{data.type}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
  );
}

function DataTable({header, data}){
  return (<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      {/* <DataTableHead datas={header}/> */}
      <DataTableBody datas={data} hover/>
    </Table>
  </TableContainer>)
}

export default DataTable;