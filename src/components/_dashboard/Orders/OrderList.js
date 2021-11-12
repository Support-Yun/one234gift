import { Card, CardContent } from '@mui/material';
import DataTable from '../../table/Table';

export default function OrderList({data}) {
  const OrderTableHeader = ['주문번호', '고객명', '날짜', '총매출가', '판매구분','상태'];
  return (
    <Card>
      <CardContent>
        <DataTable 
        header={OrderTableHeader} data={data} ignoreKey={['onClick','selectable']}
        />
      </CardContent>
    </Card>
  );
}
