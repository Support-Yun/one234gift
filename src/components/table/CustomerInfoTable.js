import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CustomerInfoTable({ info, info0, info1, info2, info3, minW }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: minW }} size="small" aria-label="a dense table">
        <TableBody>
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { border: 0 }
            }}
          >
            <TableCell style={{ backgroundColor: 'rgba(0, 171, 85, 0.08)' }} align="center">
              {info[0]}
            </TableCell>
            <TableCell align="center">{info0}</TableCell>
            <TableCell style={{ backgroundColor: 'rgba(0, 171, 85, 0.08)' }} align="center">
              {info[1]}
            </TableCell>
            <TableCell align="center">{info1}</TableCell>
          </TableRow>
          <TableRow
            sx={{
              '&:last-child td, &:last-child th': { border: 0 }
            }}
          >
            <TableCell style={{ backgroundColor: 'rgba(0, 171, 85, 0.08)' }} align="center">
              {info[2]}
            </TableCell>
            <TableCell align="center">{info2}</TableCell>
            <TableCell style={{ backgroundColor: 'rgba(0, 171, 85, 0.08)' }} align="center">
              {info[3]}
            </TableCell>
            <TableCell align="center">{info3}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
