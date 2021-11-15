import axios from 'axios';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

export default function CustomerList({onClick, searchDTO}){
    const [customers, setCustomers] = useState([]);
    const [totalElement, setTotalElement] = useState(0);
    const [page, setPage] = useState(0);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    
    async function getCustomers(nowPage){
        const data = await axios.get(`http://192.168.45.128:8000/api/customer`,{
            params : {
                page : nowPage,
                size : 10,
                location : searchDTO && searchDTO.location ? searchDTO.location : null,
                category : searchDTO && searchDTO.category ? searchDTO.category : null,
                businessName : searchDTO && searchDTO.businessName ? searchDTO.businessName : null,
            },
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`
            }
        });
        return data;
    }

    useEffect(()=>{
        getCustomers(page).then(({data})=>{
            setPrev(data.prev);
            setNext(data.next);
            setTotalElement(data.totalElement);
            setCustomers(data.customers);
        });
    },[page || searchDTO]);

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow align="center">
                        총 <strong>{totalElement}</strong>건의 고객 정보가 존재합니다.
                    </TableRow>
                    <br/>
                    <TableRow>
                        <TableCell align="center">고객 업체명</TableCell>
                        <TableCell align="center">지역</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((customer)=>(
                        <TableRow hover onClick={()=>onClick(customer)}>
                            <TableCell align="center">{customer.businessInfo.name}[{customer.category}]</TableCell>
                            <TableCell align="center">{customer.address.location}</TableCell>
                        </TableRow> 
                    ))}
                    <br/>
                    <TableRow align="right">
                        <TableCell colSpan={2} align="center">
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
        </TableContainer>
    );
}