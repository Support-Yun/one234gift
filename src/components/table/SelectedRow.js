import {useState} from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export function SelectedRow({data, ignoreKey, hover, idx}){
  const [select, setSelect] = useState(false);

  return (
    <TableRow
      onClick={()=>{
        if(data.onClick){
          data.onClick();
        }
      }}
      hover={hover}
      key={idx}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {Object.keys(data).map((key, _idx) => {
        if (ignoreKey && ignoreKey.includes(key)) {
          return null;
        }
        return (
          <TableCell key={_idx} align="center">
            {data[key]}
          </TableCell>
        );
      })}
    </TableRow>
  );
}