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
  Radio
} from '@mui/material';
import * as Yup from 'yup';

import { useEffect, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import CustomerInfoInputTable from '../components/table/CustomerInfoInputTable';
import Page from '../components/Page';

export default function AddOrder() {
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
      // handleLogin((data)=>{
      //   setTokens(data);
      //   navigate('/dashboard', { replace: true });
      // },
      // (msg)=>{
      //   if(msg.error_description === '자격 증명에 실패하였습니다.'){
      //     alert('전화번호 혹은 비밀번호를 다시 확인해주세요.');
      //     setSubmitting(false);
      //   }
      // });
      alert();
    }
  });
  const { errors, touched, isSubmitting, setSubmitting, handleSubmit, getFieldProps, handleReset } =
    formik;

  useEffect(() => {
    console.log(formik);
  }, [formik]);

  return (
    <FormikProvider value={formik}>
      <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
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
                            {...getFieldProps('customerName')}
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
                              <FormControlLabel value="sales" control={<Radio />} label="판매" />
                              <FormControlLabel value="sample" control={<Radio />} label="샘플" />
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
                    <Button variant="contained" size="large" sx={{ width: '200px' }}>
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
