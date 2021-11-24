import axios from 'axios';

import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  TableContainer,
  TextField,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Divider,
  Button,
  Paper,
  CardHeader,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel
} from '@mui/material';
import * as Yup from 'yup';

import { useEffect, useState, useRef } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import CustomerInfoInputTable from '../components/table/CustomerInfoInputTable';
import Page from '../components/Page';
import CustomerList from '../components/_dashboard/customer/CustomerList';

export default function AddOrder() {
  const [searchLocation,setSearchLocation] = useState('선택');
  const [searchCategory,setSearchCategory] = useState('선택');
  const [searchDTO, setSearchDTO] = useState({});
  const [customer, setCustomer] = useState();

  const searchText = useRef();

  const LoginSchema = Yup.object().shape({
    customerName: Yup.string().required('고객을 입력해주세요'),
    orderType: Yup.string().required('주문타입을 선택해주세요'),
    product: Yup.string().required('상품명을 입력해주세요'),
    quantity: Yup.string().required('수량을 입력해주세요'),
    purchasePrice: Yup.string().required('구매단가를 입력해주세요'),
    salesPrice: Yup.string().required('판매단가를 입력해주세요'),
    address: Yup.string().required('배송지 주소를 입력해주세요'),
    
  });

  const formik = useFormik({
    initialValues: {
      customerName: '',
      orderType: '',
      product: '',
      quantity: '',
      purchasePrice: '',
      salesPrice: '',
      address: '',
      note: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      alert();
    }
  });
  const { errors, touched, isSubmitting, setSubmitting, handleSubmit, getFieldProps, handleReset } =
    formik;


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
    
    function handleRegisterOrderBtnOnClick(){
      if(!customer){
        alert('고객을 선택해주세요.');
        return;
      }
      const order = {
          "product":formik.values.product,
          "customerId" : customer.customerId,
          "delivery" : formik.values.address === '' ? null : formik.values.address.trim(),
          "quantity" : formik.values.quantity,
          "purchasePrice" : formik.values.purchasePrice,
          "salePrice" : formik.values.salesPrice,
          "type" : formik.values.orderType
      };
      
      if(order.type === ''){
        alert('판매 구분을 선택해주세요.');
        return;
      }

      saveOrder(order);
    }

    function saveOrder(order){
      axios.post(`http://10.202.36.105:8000/api/order`,order,{
        headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(({data})=>{
        alert('주문이 정상적으로 등록되었습니다.');
        handleReset();
      }).catch(({response}) =>{
        alert(response.data[0]);
      });
    }

  useEffect(() => {
  }, []);

  return (
    <FormikProvider value={formik}>
      <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
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
        <br/>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4}>
              <Card>
                <CardContent>
                  <CustomerList searchDTO={searchDTO} onClick={(customer)=>{
                    setCustomer(customer)
                  }}/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} sm={8} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader title="주문(발주) 등록" />
                    <br />
                    <Divider />
                    <CardHeader title="주문 기본 정보" />
                    <CardContent>
                      <CustomerInfoInputTable
                        info={['고객명', '판매구분', '상품명', '수량', '매입단가', '판매단가']}
                        info0={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            value={customer && customer.businessInfo ? customer.businessInfo.name : ""}
                            fullWidth
                          />
                        }
                        info1={
                          <FormControl component="fieldset">
                            <RadioGroup
                              row
                              aria-label="orderTyel"
                              name="radio-buttons-group"
                              {...getFieldProps('orderType')}
                            >
                              <FormControlLabel value="PRODUCT" control={<Radio />} label="판매" />
                              <FormControlLabel value="SAMPLE" control={<Radio />} label="샘플" />
                            </RadioGroup>
                          </FormControl>
                        }
                        info2={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            {...getFieldProps('product')}
                            fullWidth
                          />
                        }
                        info3={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            type="number"
                            fullWidth
                            {...getFieldProps('quantity')}
                          />
                        }
                        info4={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            type="number"
                            {...getFieldProps('purchasePrice')}
                            fullWidth
                          />
                        }
                        info5={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            type="number"
                            {...getFieldProps('salesPrice')}
                            fullWidth
                          />
                        }
                        minW={650}
                      />

                      <br />
                      <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                          <TableBody>
                            <TableRow
                              sx={{
                                '&:last-child td, &:last-child th': { border: 0 }
                              }}
                            >
                              <TableCell
                                style={{
                                  backgroundColor: 'rgba(0, 171, 85, 0.08)',
                                  width: '205px'
                                }}
                                align="center"
                              >
                                배송지주소
                              </TableCell>
                              <TableCell align="center">
                                <TextField
                                  id="standard-basic"
                                  label=""
                                  variant="standard"
                                  {...getFieldProps('address')}
                                  fullWidth
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader title="비고" />
                    <CardContent>
                      <TextField
                        id="outlined-multiline-static"
                        label="비고 작성란(주문에대한 특이사항을 기입해주세요)"
                        multiline
                        rows={4}
                        fullWidth
                        {...getFieldProps('note')}

                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '30px' }}>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button
                      variant="contained"
                      size="large"
                      color="error"
                      sx={{ width: '200px' }}
                      onClick={handleReset}
                    >
                      초기화
                    </Button>
                    <Button variant="contained" size="large" sx={{ width: '200px' }} onClick={()=>handleRegisterOrderBtnOnClick()}>
                      등록
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </FormikProvider>
  );
}
