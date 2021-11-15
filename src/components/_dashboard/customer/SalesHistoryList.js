import axios from 'axios';

import { useState, useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function SalesHistoryList({customerId}){
    const [page, setPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const [salesHistoryList, setSalesHistoryList] = useState([]);

    async function getSalesHistorys(nowPage){
        const data = await axios.get(`http://192.168.45.128:8000/api/sales-history/customer/${customerId}`, {
            params : {
                page : nowPage,
                size : 5,
            },
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        return data;
    }

    useEffect(()=>{
        if(customerId){
            getSalesHistorys(page).then(({data})=>{
                setSalesHistoryList(data.salesHistoryModels);
                setTotalElement(data.totalElement);
                setPrev(data.prev);
                setNext(data.next);
            });
        }
    },[customerId, prev, next, page]);
    
    return (
        <>
        총 <strong>{totalElement}</strong>건의 영업 기록이 존재합니다.
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">날짜</TableCell>
                    <TableCell align="center">내용</TableCell>
                    <TableCell align="center">작성자</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {salesHistoryList.map((salesHistory)=>(
                    <TableRow hover>
                        <TableCell align="center">{salesHistory.createDate}</TableCell>
                        <TableCell align="center">{salesHistory.content.length > 10 ? `${salesHistory.content.substring(0, 10)}...` : salesHistory.content}</TableCell>
                        <TableCell align="center">{salesHistory.writer.name}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell align="center" colSpan={2}>
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
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </>
    );
}