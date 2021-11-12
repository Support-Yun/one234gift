import { Card, CardContent, Stack, Button } from '@mui/material';

export default function OrderHeader() {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <h4>월매출: 30,402,000</h4>
          <Stack direction="row"spacing={2}>
            <Button to="/" variant="contained" size="small">
              주문최소
            </Button>
            <Button to="/" variant="contained" size="small">
              재주문
            </Button>
            <Button to="/" variant="contained" size="small">
              견적서발행
            </Button>
            <Button to="/" variant="contained" size="small">
              인쇄
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
