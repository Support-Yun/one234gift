import axios from 'axios';

import { Card, CardHeader, CardContent, Stack, IconButton } from '@mui/material';
import { height, styled } from '@mui/system';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const NoticeCard = styled(Card)(() => ({
  height: '100%'
}));

export default function AppNotice() {
  const [totalData, setTotalData] = useState(0);
  const [data, setData] = useState([]);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [page, setPage] = useState(0);

  async function getData(page){
    const data = await axios.get(`http://192.168.45.128:8000/api/reservation-call?page=${page}&size=5&future=true`, {
      headers : {
        Authorization : `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return data;
  }
  
  const handlePrev = () => {
    setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    getData(page).then(({data})=>{
      setPrev(data.prev);
      setNext(data.next);
      setTotalData(data.totalElement);
      setData(data.reservationCallModels)
    });
  }, [page]);

  return (
    <NoticeCard>
      <CardHeader title={`금일 예약콜 목록[${totalData}]`} />
      <CardContent>
      <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">고객명</TableCell>
                <TableCell align="center">예약 일자</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {
                data.map(reservationCall=>(
                  <TableRow hover key={reservationCall.salesHistoryId}>
                    <TableCell align="center">{reservationCall.customer.category + reservationCall.customer.name}</TableCell>
                    <TableCell align="center">{reservationCall.when}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          {
            prev ? (
              <IconButton aria-label="perveBtn" onClick={handlePrev}>
                <KeyboardArrowLeftIcon />
              </IconButton>
            ) :
            (
              <IconButton aria-label="perveBtn" disabled>
                <KeyboardArrowLeftIcon />
              </IconButton>
            )
          }
          {
            next ? (
              <IconButton aria-label="nextBtn" onClick={handleNext}>
                <KeyboardArrowRightIcon />
              </IconButton>
            ) :
            (
              <IconButton aria-label="nextBtn" disabled>
                <KeyboardArrowRightIcon />
              </IconButton>
            )
          }
        </Stack>
      </CardContent>
    </NoticeCard>
  );
}
