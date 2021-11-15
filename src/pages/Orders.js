import axios from 'axios';
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  IconButton
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useState } from 'react';
import DataTable from '../components/table/Table';
import Page from '../components/Page';
import Label from '../components/Label';
import { OrderList, OrdersHeader, OrderPaging } from '../components/_dashboard/Orders';


export default function Orders() {
  const [selectOrder, setSelectOrder] = useState();

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <OrdersHeader />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <OrderList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
