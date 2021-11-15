import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataTableHead({ datas }) {
  return (
    <TableHead>
      <TableRow>
        {datas.map((data) => (
          <TableCell>{data}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


function DataTableBody({ datas, hover, ignoreKey }) {
  const [selectedRow, setSelectedRow] = React.useState();
  const unusedStyle = {backgroundColor:'hsla(0, 96%, 59%, 0.13)'};

  return (
    <TableBody>
      {datas.map((data, idx) => (
        <TableRow
          onClick={() => {
            if(data.selectable){
              setSelectedRow(data.idx)
            }
            data.onClick(data.idx);
          }}
          selected={selectedRow === data.idx}
          hover={hover}
          key={idx}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          style={data.state==="미사용"?unusedStyle:null}
          // {data.state==="미사용"? style = {{backgroundColor:'hsla(0, 96%, 59%, 0.22)'}}}
        >
          {Object.keys(data).map((key, _idx) => {
            if (ignoreKey && ignoreKey.includes(key)) {
              return null;
            }
            return (
              <TableCell key={_idx}>
                {data[key]}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}

function CustomDataTable({ header, data, ignoreKey, size }) {
  return (
    <TableContainer component={Paper} style={{cursor:'pointer'}}>
      <Table
        sx={{ minWidth: 300 }}
        aria-label="simple table"
        size={size}
      >
        {header && <DataTableHead datas={header} />}
        <DataTableBody datas={data} hover ignoreKey={ignoreKey} />
      </Table>
    </TableContainer>
  );
}

export default CustomDataTable;
