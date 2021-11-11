import { useState, useEffect } from 'react';
import {
    Paper,
    TextField,
    Select,
    Grid,
    MenuItem,
    Button,
    Container,
} from '@mui/material';
import Page from '../components/Page';
import Calender from '../components/calender/Calender';
import RadioGroupRating from '../components/Rating/Rating';
import DataTable from '../components/table/Table';
import UnstyledSwitches from '../components/Switch/Switch';
import MaxHeightTextarea from '../components/Textfeild/Textfeild';

export default function Customer() {
    const [customerName, setCustomerName] = useState("");
    const [category, setCategory] = useState("분류");
    const [location, setLocation] = useState("지역");
    const [customerInfomation, setcustomerinfomation] = useState(
        {
            customerId: 1,
            name: "성동우체국",
            category: "우체국",
            location: "서울 특별시",
            state: "활성화",
            officeid: "123312312",
            fax: "032-85-5652",
            managername: "박선규",
            managerId: 1,
            managerRank: "사원",
            email: "qwe@naverr.com",
            managerPhone: "010-2622-2665",
            otherPhone: "010-5522-2251"
        }
    );

    const [CustomWriterInfo, setWriterInfo] = useState({
        WriterId: 1,
        name: "김말숙",
        managerPhone: "010-2622-2665",
        managerRank: '사원'
    })
    const [noteWrite, setnoteWrite] = useState({
        WriterId: 1,
        name: "김말숙",
        managerPhone: "010-2622-2665",
        managerRank: '사원',
        note: '동해물과백두산이 마르고 닳도록'
    })

    function customerinfomationHandler(target) {
        setcustomerinfomation(target.value);
    }
    function CustiomerInfomap() {
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




    const customerTableHeaderColums = ["업체명", "사업자번호", "상태", "분류", "FAX"];
    const customerinfoTableHeader = ["담당자명", "직급", "이메일", "메인연락처", "기타 연락처"];
    const Writerinfo = ["작성자", "직위", "연락처"];
    const NoteWriterinfo = ["#","담당자", "직위", "연락처","메모내역"]

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
                                        { when: '제주', type: 'ksjdfh', name: '박기동', onClick: () => { } },
                                        { when: '충남', type: 'ksjdfh', name: '이기동', onClick: () => alert() },
                                        { when: '전남', type: 'ksjdfh', name: '정기동', onClick: () => alert() },
                                        { when: '강원', type: 'ksjdfh', name: '안기동', onClick: () => alert() },
                                    ]}

                                />
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={8}>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <table style={{ width: "100%", textAlign: "center" }}>
                                <thead>
                                    {
                                        customerTableHeaderColums.map((colums) => (
                                            <th>{colums}</th>
                                        ))
                                    }
                                </thead>
                                <tbody>
                                    <td>{customerInfomation.name}</td>
                                    <td>{customerInfomation.officeid}</td>
                                    <td>{customerInfomation.state}</td>
                                    <td>{customerInfomation.category}</td>
                                    <td>{customerInfomation.fax}</td>
                                </tbody>
                            </table>
                        </Paper>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <table style={{ width: "100%", textAlign: "center" }}>
                                <thead >
                                    {
                                        customerinfoTableHeader.map((colums) => (
                                            <th>{colums}</th>
                                        ))
                                    }
                                </thead>
                                <tbody style={{ textAlign: "center" }}>
                                    <td>{customerInfomation.managername}</td>
                                    <td>{customerInfomation.managerRank}</td>
                                    <td>{customerInfomation.email}</td>
                                    <td>{customerInfomation.managerPhone}</td>
                                    <td>{customerInfomation.otherPhone}</td>
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <table style={{ width: "100%", textAlign: "center" }}>
                                <thead >
                                    {
                                        Writerinfo.map((colums) => (
                                            <th>{colums}</th>
                                        ))
                                    }
                                </thead>
                                <tbody style={{ textAlign: "center" }}>
                                    <td>{CustomWriterInfo.name}</td>
                                    <td>{CustomWriterInfo.managerRank}</td>
                                    <td>{CustomWriterInfo.managerPhone}</td>
                                </tbody>
                            </table>
                            <br />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Calender />
                                <div style={{ margin: "0px", width: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    샘플여부<UnstyledSwitches />
                                </div>
                                <div style={{ margin: "30px", display: "flex" }}>
                                    반응    <RadioGroupRating />
                                </div>
                            </div>
                        </Paper>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <MaxHeightTextarea />
                        </Paper>
                        <Paper elevation={3} style={{ padding: 20, margin: 20 }}>
                            <table style={{ width: "100%", textAlign: "center" }}>
                                <thead>
                                    {
                                        NoteWriterinfo.map((colums) => (
                                            <th>{colums}</th>
                                        ))
                                    }
                                </thead>
                                <tbody>
                                    <td>{noteWrite.WriterId}</td>
                                    <td>{noteWrite.name}</td>
                                    <td>{noteWrite.managerRank}</td>
                                    <td>{noteWrite.managerPhone }</td>
                                    <td>{noteWrite.note}</td>
                                </tbody>
                            </table>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>


        </Page>
    );
}
