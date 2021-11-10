import { Box, Grid, Container, Typography, Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import DataTable from '../components/table/Table';
import Page from '../components/Page';
import Label from '../components/Label';

export default function Orders() {
  const [data, setData] = useState([
    {
      idx: 1,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      when: '2021-11-03',
      type: '샘플'
    },
    {
      idx: 2,
      date: '2021-11-05',
      price: 48349000,
      name: '한국전력공사울산지사',
      when: '2021-11-03',
      type: '판매'
    },
    {
      idx: 3,
      date: '2021-11-15',
      price: 48349000,
      name: '의정부우체국',
      when: '2021-11-15',
      type: '샘플'
    },
    {
      idx: 4,
      date: '2021-11-05',
      price: 48349000,
      name: '국민건강보험공단부산북부지사고객지원부',
      when: '2021-11-03',
      type: '판매'
    },
    {
      idx: 5,
      date: '2021-11-15',
      price: 48349000,
      name: '한국전력공사울산지사',
      when: '2021-11-03',
      type: '판매'
    },
    {
      idx: 6,
      date: '2021-11-05',
      price: 48349000,
      name: '의정부우체국',
      when: '2021-11-15',
      type: '샘플'
    }
  ]);

  useEffect(()=>{
    const contents = [];
    data.map((data, idx) => {
      contents.push({
        idx: data.idx,
        name: data.name,
        date: data.date,
        when: data.when,
        price: data.price,
        type: (
          <Label variant="ghost" color={(data.type === '샘플' && 'error') || 'success'}>
            {data.type}
          </Label>
        )
      });
      return null;
    });
    setData(contents)
  },[]);

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardContent>sdfjlksdjf</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <CardContent>
                <DataTable data={data} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
