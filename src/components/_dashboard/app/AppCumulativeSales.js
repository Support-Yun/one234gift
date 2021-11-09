import { Card, CardHeader, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';

const hstyle = {
  fontSize: "1.125rem",
  fontWeight:"600"
}

export default function AppCumulativeSales() {
  return(
    <>
      <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
        <p style={hstyle}>이번 달 매출액은 총</p>
        <h3 style={{borderBottom:'1px solid black',textAlign:'center', width:'600px'}}>474,300,000</h3>
        <p style={hstyle}>원 입니다.</p>

        </Stack>
      </CardContent>
      </Card>
    </>
  );
}