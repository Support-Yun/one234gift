import { useState } from 'react';
import {
    Paper,
    TextField,
    Select,
    Grid,
    MenuItem,
    Button,
    Container
} from '@mui/material';
import Page from '../components/Page';
import DataTable from '../components/table/Table';
import DenseTable from '../components/table/DenseTable';

export default function Customer() {
    const [customerName, setCustomerName] = useState("");
    const [category, setCategory] = useState("분류");
    const [location, setLocation] = useState("지역");
    const [customerInfomation, setcustomerinfomation] = useState("");


    function customerinfomationHandler(target) {
        setcustomerinfomation(target.value);


    }
    /**
     * 고객명 변경 핸들러
     */
    function customerNameChangeHandler(target) {
        setCustomerName(target.value.trim());
    }

    /**
     * 분류 셀렉트 변경 핸들러
     */
    function categoryChangeHandler(target) {
        setCategory(target.value);
    }

    /**
     * 지역 셀렉트 변경 핸들러
     */
    function locationChangeHandler(target) {
        setLocation(target.value);
    }

    /**
     * 찾기 버튼 클릭 핸들러
     */
    function searchBtnHandler() {
        const searchObj = getSearchObj();
        getCustomers(searchObj);
    }

    /**
     * 초기화 버튼 클릭 핸들러
     */
    function clearBtnHandler() {
        setCustomerName("");
        setCategory('분류');
        setLocation('지역');
        setcustomerinfomation("");
    }

    /**
     * 고객 검색시 사용할 json 데이터 가져오기
     */

    function getSearchObj() {
        const searchObj = {};

        // 고객명이 입력되었을 경우
        if (customerName !== '') {
            searchObj.customerName = customerName;
        }

        // 지역이 선택되었을 경우
        if (location !== '지역') {
            searchObj.location = location;
        }

        // 분류가 선택되었을 경우
        if (category !== '분류') {
            searchObj.category = category;
        }

        return searchObj;
    }

    /**
     * 고객 검색 api 요청
     */
    function getCustomers(searchObj) {
    }
    /*
     클릭된 테이블 행 값 가져오는 함수
    */
    

    function getMockCustomers() {
        return [
            {
                customerId : 1,
                name : "고객 업체명",
                category : "우체국",
                location : "서울 특별시"                
            },
            {
                customerId : 2,
                name : "고객 업체명",
                category : "우체국",
                location : "서울 특별시"                
            },
            {
                customerId : 3,
                name : "고객 업체명",
                category : "우체국",
                location : "서울 특별시"                
            },
            {
                customerId : 4,
                name : "고객 업체명",
                category : "우체국",
                location : "서울 특별시"
            },
            {
                customerId : 5,
                name : "고객 업체명",
                category : "우체국",
                location : "서울 특별시"
            },
        ]
    }

    const customerTableHeaderColums = ["이름", "분류", "지역"];

    const categoryList = ["분류", "은행", "우체국"];
    const locationList = ["지역", "서울특별시", "부산광역시"];
    const margin10Right = { marginRight: 10, width: '25%' };
    return (
        <Page title="User | Minimal-UI">
            
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item md={12} sm={6} xs={6}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <TextField value={customerName} onChange={({ target }) => customerNameChangeHandler(target)} id="outlined-basic" label="고 객 명" style={margin10Right} variant="outlined" />
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                style={margin10Right}
                                value={category}
                                onChange={({ target }) => categoryChangeHandler(target)}
                            >
                                {categoryList.map((data) => <MenuItem value={data}>{data}</MenuItem>)}
                            </Select>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                style={margin10Right}
                                onChange={({ target }) => locationChangeHandler(target)}
                            >
                                {locationList.map((data) => <MenuItem value={data}>{data}</MenuItem>)}
                            </Select>
                            <Button onClick={() => searchBtnHandler()} variant="contained" size="large" style={{ width: "10%", marginRight: 10 }}>찾 기</Button>
                            <Button color="error" onClick={() => clearBtnHandler()} variant="contained" size="large" style={{ width: "10%" }}>지우기</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Grid container spacing={3}>
                                <DataTable
                                    header={["고객명", "상태", "분류", "지역"]}
                                    data={[
                                        { when: '서울', type: 'ksjdfh', name: '김기동', onClick: () => customerinfomationHandler },
                                        { when: '제주', type: 'ksjdfh', name: '박기동', onClick: () => alert() },
                                        { when: '충남', type: 'ksjdfh', name: '이기동', onClick: () => alert() },
                                        { when: '전남', type: 'ksjdfh', name: '정기동', onClick: () => alert() },
                                        { when: '강원', type: 'ksjdfh', name: '안기동', onClick: () => alert() },
                                    ]}

                                />
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={8}>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <table>
                                <thead>
                                    {
                                        customerTableHeaderColums.map((colums)=>(
                                            <th>{colums}</th>
                                        ))
                                    }
                                </thead>
                                <tbody>
                                    {
                                        getMockCustomers().map((customer)=>(
                                            <tr onClick={()=>{
                                                alert(customer.customerId);
                                            }}>
                                                <td>{customer.name}</td>
                                                <td>{customer.category}</td>
                                                <td>{customer.location}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </Paper> 
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            DFKJSHFJKDS
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


        </Page>
    );
}
