import axios from 'axios';

import {
  Container,
  Grid,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Divider,
  Button,
  CardHeader,
  Stack
} from '@mui/material';
import * as Yup from 'yup';

import { useEffect, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import CustomerInfoInputTable from '../components/table/CustomerInfoInputTable';
import Page from '../components/Page';

export default function AddCustomer() {
  const LoginSchema = Yup.object().shape({
    category: Yup.string().required('카테고리를 선택해주세요'),
    location: Yup.string().required('지역을 선택해주세요'),
    address: Yup.string().required('지역을 입력해주세요'),
    customerName: Yup.string().required('고객명을 입력해주세요'),
    buyerName: Yup.string().required('구매담당자의 이름을 입력해주세요'),
    buyerCall1: Yup.string().required('구매담당자의 전화번호를 입력해주세요')
  });

  const categoryData = [
    '우체국',
    '은행',
    '한국전력공사',
    '국민건강보험공단',
    '근로복지공단',
    '행정복지센터',
    '보건소',
    '농산물품질관리원',
    '새마을금고',
    '산업인력공단',
    '농협',
    '교도소',
    '국민연금공단'
  ];
  const locationData = [
    '경기도',
    '강원도',
    '충청도',
    '경상도',
    '전라도',
    '서울시',
    '인천시',
    '기타'
  ];

  const formik = useFormik({
    initialValues: {
      category: '',
      location: '',
      customerName: '',
      businessNumber: '',
      fax: '',
      buyerName: '',
      buyerSpot: '',
      buyerCall1: '',
      buyerCall2: '',
      buyerEmail: ''
    },
    validationSchema: LoginSchema
  });

  function handleSubmitButtonOnClick(){
    const customer = {
        "category" : formik.values.category,
        "businessInfo" : {
            "name": formik.values.customerName,
            "number": formik.values.businessNumber === '' ? null : formik.values.businessNumber
        },
        "purchasingManagers" : [
            {
                "name": formik.values.buyerName,
                "contact" : {
                    "mainTel" : formik.values.buyerCall1,
                    "subTel" : formik.values.buyerCall2 === '' ? null : formik.values.buyerCall2
                } 
            }
        ],
        "address" : {
            "location" : formik.values.location
        },
        "fax" : formik.values.fax === '' ? null : formik.values.fax
    };
    saveCustomer(customer);
  }

  function saveCustomer(customer){
    axios.post(`http://10.202.36.105:8000/api/customer`, customer, {
      headers : {
        Authorization : `Bearer ${localStorage.getItem('access_token')}`
      }
    }).then(({data})=>{
      alert('고객이 정상적으로 등록되었습니다.');
      handleReset();
    }).catch(({response}) =>{
      alert(response.data[0]);
    });
  }

  const { errors, touched, isSubmitting, setSubmitting, handleSubmit, getFieldProps, handleReset } = formik;

  return (
    <FormikProvider value={formik}>
      <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader title="신규 고객 등록" />
                    <br />
                    <Divider />
                    <CardHeader title="업체 정보" />
                    <CardContent>
                      <CustomerInfoInputTable
                        info={['*분류', '*고객명', '*지역', '팩스', '사업자번호']}
                        info0={
                          <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <Select
                              labelId="demo-simple-select-standard-label-1"
                              id="demo-simple-select-standard-1"
                              {...getFieldProps('category')}
                              label="Age"
                            >
                              {categoryData.map((data, idx) => (
                                <MenuItem key={idx} value={data}>
                                  {data}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        }
                        info1={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('customerName')}
                            fullWidth
                          />
                        }
                        info2={
                          <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <Select
                              labelId="demo-simple-select-standard-label-2"
                              id="demo-simple-select-standard-2"
                              {...getFieldProps('location')}
                              label="Age"
                            >
                              {locationData.map((data, idx) => (
                                <MenuItem key={idx} value={data}>
                                  {data}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        }
                        info3={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                            {...getFieldProps('fax')}
                          />
                        }
                        info4={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('businessNumber')}
                            fullWidth
                          />
                        }
                        minW={650}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardHeader title="구매 담당자 정보" />
                    <CardContent>
                      <CustomerInfoInputTable
                        info={['구매담당자', '직위', '연락처', '기타연락처', '이메일', '']}
                        info0={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                            {...getFieldProps('buyerName')}
                          />
                        }
                        info1={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('buyerSpot')}
                            fullWidth
                          />
                        }
                        info2={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('buyerCall1')}
                            fullWidth
                          />
                        }
                        info3={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('buyerCall2')}
                            fullWidth
                          />
                        }
                        info4={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            {...getFieldProps('buyerEmail')}
                            fullWidth
                          />
                        }
                        info5=""
                        minW={650}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: '30px' }}>
                  <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button variant="contained" size="large" color="error" sx={{ width: '200px' }} onClick={handleReset}>
                      초기화
                    </Button>
                    <Button variant="contained" size="large" sx={{ width: '200px' }} onClick={()=>handleSubmitButtonOnClick()}>
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
