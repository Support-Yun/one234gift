import { Box, Grid, Container, Typography, Card, CardContent, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import DataTable from '../components/table/Table';
import Page from '../components/Page';
import Label from '../components/Label';
import { OrderList, OrdersHeader, OrderPaging } from '../components/_dashboard/Orders';

export default function Orders() {
  const [selectOrder, setSelectOrder] = useState();
  const [data, setData] = useState([
    {
      idx: 1,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      type: '샘플',
      state: '등록'
    },
    {
      idx: 2,
      date: '2021-11-05',
      price: 48349000,
      name: '한국전력공사울산지사',
      type: '판매',
      state: '등록'
    },
    {
      idx: 3,
      date: '2021-11-15',
      price: 48349000,
      name: '의정부우체국',
      type: '샘플',
      state: '취소'
    },
    {
      idx: 4,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      type: '판매',
      state: '취소'
    },
    {
      idx: 5,
      date: '2021-11-15',
      price: 48349000,
      name: '한국전력공사울산지사',
      type: '판매',
      state: '등록'
    },
    {
      idx: 6,
      date: '2021-11-05',
      price: 48349000,
      name: '의정부우체국',
      type: '샘플',
      state: '완료'
    },
    {
      idx: 7,
      date: '2021-11-05',
      price: 48349000,
      name: '한국전력공사울산지사',
      type: '판매',
      state: '등록'
    },
    {
      idx: 8,
      date: '2021-11-15',
      price: 4111110,
      name: '의정부우체국',
      type: '샘플',
      state: '취소'
    },
    {
      idx: 9,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      type: '판매',
      state: '취소'
    },
    {
      idx: 10,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      type: '판매',
      state: '취소'
    }
  ]);

  useEffect(() => {
    const contents = [];
    data.map((data) => {
      contents.push({
        idx: data.idx,
        name: data.name,
        date: data.date,
        price: data.price.toLocaleString('ko-KR'),
        type: (
          <Label variant="ghost" color={(data.type === '샘플' && 'error') || 'success'}>
            {data.type}
          </Label>
        ),
        onClick: (selectedIdx) => {
          setSelectOrder(selectedIdx);
        },
        state: data.state,
        selectable: true
      });
      return null;
    });
    setData(contents);
  }, []);

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <OrdersHeader />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <OrderList ignoreKey={['onClick']} data={data} />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Stack direction="row" justifyContent="center">
              <OrderPaging />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
