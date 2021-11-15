import axios from 'axios';

import {
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Paper,
  Switch,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Divider,
  FormControlLabel,
  Checkbox,
  FormGroup
} from '@mui/material';

import { useEffect, useState, useRef } from 'react';
import CustomerInfoTable from '../components/table/CustomerInfoTable';
import Page from '../components/Page';
import CustomerList from '../components/_dashboard/customer/CustomerList';
import SalesHistoryList from '../components/_dashboard/customer/SalesHistoryList';

export default function Customer () {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
  const searchText = useRef();
  const [searchLocation,setSearchLocation] = useState('선택');
  const [searchCategory,setSearchCategory] = useState('선택');
  const callReservationDate = useRef();
  const salesHistoryContent = useRef();

  const [reactivity, setReactivity] = useState("THREE");
  const [sample,setSample] = useState(false);
  const [catalogue,setCatalogue] = useState(false);

  const [customer, setCustomer] = useState({});

  const [searchDTO, setSearchDTO] = useState({});
  const [purchasingManagers, setPurchasingManagers] = useState([]);

  async function getCustomer(customerId){
    const data = axios.get(`http://192.168.45.128:8000/api/customer/${customerId}`,{
      headers : {
        Authorization : `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return data;
  }

  function handleCustomerListOnClick(customerId){
    getCustomer(customerId).then(({data})=>{
      setPurchasingManagers(data.purchasingManagers);
      setCustomer(data);
    });
  }

  function handleSearchBtnOnClick(){
    const search = {};
    if(searchText.current.value.trim() !== ''){
      search.businessName = searchText.current.value.trim();
    }
    if(searchLocation !== '선택'){
      search.location = searchLocation;
    }
    if(searchCategory !== '선택'){
      search.category = searchCategory;
    }
    setSearchDTO(search);
  }

  function handleInitSearchBtnOnClick(){
    searchText.current.value = "";
    setSearchCategory('선택');
    setSearchLocation('선택');
  }

  function handleSalesHistoryWriteBtnOnClick(){
    const _sample = sample;
    const _catalogue = catalogue;
    const _reactivity = reactivity;

    const salesHistory = {
        customerId : customer.customerId,
        sample : _sample,
        catalogue : _catalogue,
        content : salesHistoryContent.current.value.trim(),
        reactivity : _reactivity,
    }
    if(callReservationDate.current.value !== ''){
      salesHistory.callReservationDate = callReservationDate.current.value;
    }
    saveSalesHistory(salesHistory);
  }

  function saveSalesHistory(salesHistory){
    axios.post(`http://192.168.45.128:8000/api/sales-history`, salesHistory, {
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`
      }
    }).then(({data})=>{
      alert('영업 기록이 정상적으로 등록되었습니다.');
    }).catch(({response}) =>{
      alert(response.data[0]);
    });
  }

  useEffect(() => {
  }, [customer]);

  return (
    <>
      <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Stack direction="row" spacing={3}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <TextField id="standard-basic" label="고객명" variant="standard" inputRef={searchText}/>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <InputLabel>지역</InputLabel>
                          <Select value={searchLocation} onChange={(({target})=>setSearchLocation(target.value))}>
                            <MenuItem value="선택">선택</MenuItem>
                            <MenuItem value="서울특별시">서울특별시</MenuItem>
                            <MenuItem value="경기도">경기도</MenuItem>
                            <MenuItem value="강원도">강원도</MenuItem>
                            <MenuItem value="충청남도">충청남도</MenuItem>
                            <MenuItem value="충청북도">충청북도</MenuItem>
                            <MenuItem value="전라남도">전라남도</MenuItem>
                            <MenuItem value="전라북도">전라북도</MenuItem>
                            <MenuItem value="경상남도">경상남도</MenuItem>
                            <MenuItem value="경상북도">경상북도</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <InputLabel>분류</InputLabel>
                          <Select value={searchCategory} onChange={(({target})=>setSearchCategory(target.value))}>
                            <MenuItem value="선택">선택</MenuItem>
                            <MenuItem value="우리은행">우리은행</MenuItem>
                            <MenuItem value="수협">수협</MenuItem>
                            <MenuItem value="농협">농협</MenuItem>
                            <MenuItem value="우체국">우체국</MenuItem>
                            <MenuItem value="국민건강보험공단">국민건강보험공단</MenuItem>
                            <MenuItem value="근로복지공단">근로복지공단</MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" onClick={()=>handleSearchBtnOnClick()}>찾기</Button>
                      <Button variant="contained" color="error" onClick={()=>handleInitSearchBtnOnClick()}>
                        지우기
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card style={{ minHeight: '680px' }}>
                <CardContent>
                  <CustomerList searchDTO={searchDTO} onClick={(customer)=>handleCustomerListOnClick(customer.customerId)}/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardContent>
                      <CustomerInfoTable
                        info={['고객명', '사업자 번호', 'FAX', '영업담당자']}
                        info0={customer && customer.businessInfo ? `${customer.businessInfo.name} ${customer.saleState === 'SALE' ? "[영업중]" : "[영업중지]"}` : ""}
                        info1={customer && customer.businessInfo ? customer.businessInfo.number : ""}
                        info2={customer ? customer.fax : ""}
                        info03={customer ? "" : ""}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardContent>
                      {purchasingManagers.map((purchasingManager)=>(
                        <CustomerInfoTable
                          info={['구매담당자', '직위', '전화', 'e-mail']}
                          info0={purchasingManager.name}
                          info1={purchasingManager.jobTitle ? purchasingManager.jobTitle : ""}
                          info2={purchasingManager.contact.mainTel}
                          info3={purchasingManager.email ? purchasingManager.email : ""}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Card>
                    <CardContent>
                      <Stack direction="column" spacing={3}>
                        <Stack
                          direction="row"
                          divider={<Divider orientation="vertical" flexItem />}
                          spacing={2}
                        >
                          <TextField
                            inputRef={callReservationDate}
                            fullWidth
                            id="date"
                            label="예약콜 설정"
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
                        <FormGroup>
                          <FormControlLabel control={<Checkbox checked={sample} onChange={()=>setSample(!sample)}/>} label="샘플 제공 여부" />
                          <FormControlLabel control={<Checkbox checked={catalogue} onChange={()=>setCatalogue(!catalogue)}/>} label="카탈로그 제공 여부" />
                        </FormGroup>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">반응도</InputLabel>
                          <Select
                            label="반응도"
                            value={reactivity}
                            onChange={({target})=>setReactivity(target.value)}
                          >
                            <MenuItem value="ONE">매우 나쁨</MenuItem>
                            <MenuItem value="TWO">나쁨</MenuItem>
                            <MenuItem value="THREE">보통</MenuItem>
                            <MenuItem value="FOUR">좋음</MenuItem>
                            <MenuItem value="FIVE">매우 좋음</MenuItem>
                          </Select>
                        </FormControl>
                        <TextField
                          inputRef={salesHistoryContent}
                          label="영업 기록 메모"
                          multiline
                          rows={5}
                        />
                        <Button variant="contained" onClick={()=>handleSalesHistoryWriteBtnOnClick()}>영업 기록 등록</Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                  <Card>
                    <CardContent>
                      <SalesHistoryList customerId={customer.customerId}/>
                    </CardContent>
                  </Card>
                  <br/>
                  <Card>
                    <CardContent>주문 이력</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </>
  );
}
