import {useState,useEffect} from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function OrderList({customerId, size}) {
  const [page, setPage] = useState(0);
  const [totalElment, setTotalElement] = useState();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [orders, setOrders] = useState([]);

  async function getOrders(nowPage){
    if(customerId === ''){
      return;
    }
    const url = customerId ? `http://10.202.36.105:8000/api/order/customer/${customerId}` : `http://10.202.36.105:8000/api/order`;
    const _size = size;
    const data = axios.get(url,{
      params :{
        page:nowPage,
        size:_size
      },
      headers : {
        Authorization : `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return data;
  }

  function getState(state){
    if(state === 'REGISTER'){
      return '등록';
    }
    if(state === 'CENCEL'){
      return '취소';
    }
    return '완료';
  }

  useEffect(()=>{
    if(customerId === ''){
      return;
    }
    getOrders(page).then(({data})=>{
      setPrev(data.prev);
      setNext(data.next);
      setOrders(data.orderModels);
      setTotalElement(data.totalElement);
    })
  },[page, customerId]);

  return (
      <>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">상품명</TableCell>
              <TableCell align="center">날짜</TableCell>
              <TableCell align="center">판매가격</TableCell>
              <TableCell align="center">고객명</TableCell>
              <TableCell align="center">상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              orders.map((order)=>(
                <TableRow hover>
                  <TableCell align="center">{order.product}</TableCell>
                  <TableCell align="center">{order.createDateTime}</TableCell>
                  <TableCell align="center">{order.salePrice}</TableCell>
                  <TableCell align="center">{order.customerInfo.name}[{order.customerInfo.category}]</TableCell>
                  <TableCell align="center">{getState(order.state)}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        {
          prev ? (
          <IconButton aria-label="perveBtn" onClick={()=>setPage(page - 1)}>
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
          <IconButton aria-label="nextBtn" onClick={()=>setPage(page + 1)}>
            <KeyboardArrowRightIcon />
          </IconButton>
          ) :
          (
          <IconButton aria-label="nextBtn" disabled>
            <KeyboardArrowRightIcon />
          </IconButton>
          )
          }
      </>
  );
}
