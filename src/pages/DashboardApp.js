// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components

import Page from '../components/Page';
import {
  AppTasks,
  AppNewsUpdate,
  AppNotice,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppQuickMenu,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  AppCumulativeSales
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <AppQuickMenu />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs = {12} md={12} lg={12}>
                <AppCumulativeSales />
              </Grid>
              <Grid item xs = {12} md={12} lg={12}>
                <AppNotice />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
