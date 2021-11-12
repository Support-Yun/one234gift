import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export function DefaultRow({data, ignoreKey, hover, idx}){
  return (
    <TableRow
      onClick={data.onClick ? data.onClick : null}
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