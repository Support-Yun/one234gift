import * as React from 'react';
import { Pagination } from '@mui/material';

export default function OrderPaging() {
  return (
      <Pagination count={10} variant="outlined" shape="rounded" />
  );
}
