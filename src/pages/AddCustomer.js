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
  ListItem,
  ListItemText,
  CardHeader
} from '@mui/material';
import { styled } from '@mui/system';
import { memo, useEffect, useState } from 'react';
import CustomDataTable from '../components/table/Table_';
import CustomerInfoTable from '../components/table/CustomerInfoTable';
import Page from '../components/Page';
import DataTable from '../components/table/Table';

export default function AddCustomer() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();

  const locationHandleChange = (event) => {
    setLocation(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));
  const [memoData, setMemoData] = useState([
    {
      idx: 1,
      date: '21-03-06',
      writer: '윤지원',
      memo: '네, 가능합니다. 예전파일 재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지 > 재주문관리  메뉴에서 주문하셨던 기간 설정하신 후 재주문 하시기 바랍니다.'
    },
    {
      idx: 2,
      date: '21-03-06',
      writer: '윤지원',
      memo: '네, 가능합니다.'
    },
    {
      idx: 3,
      date: '21-03-06',
      writer: '민빌런',
      memo: '재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지.'
    },
    {
      idx: 4,
      date: '21-03-06',
      writer: '민빌런',
      memo: '재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지.'
    },
    {
      idx: 5,
      date: '21-03-06',
      writer: '민빌런',
      memo: '재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지.'
    }
  ]);

  const [data, setData] = useState([
    {
      idx: 1,
      name: '국민건강보험공단부산북부지사고객지원부',
      state: '사용',
      location: '서울시',
      category: '국민건강보험공단'
    },
    {
      idx: 2,
      name: '한국전력공사울산지사',
      state: '사용',
      location: '서울시',
      category: '한국전력공사'
    },
    {
      idx: 3,
      name: '의정부우체국',
      state: '미사용',
      location: '서울시',
      category: '우체국'
    },
    {
      idx: 4,
      name: '국민건강보험공단부산북부지사고객지원부',
      state: '미사용',
      location: '서울시',
      category: '국민건강보험공단'
    }
  ]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  function memoSummary(memo) {
    const LENGTH = 10;
    if (memo.length > LENGTH) {
      return memo.substr(0, LENGTH).concat('...');
    }
    return memo;
  }

  useEffect(() => {
    const contents = [];
    data.map((data) => {
      contents.push({
        idx: data.idx,
        name: data.name,
        state: data.state,
        location: data.location,
        category: data.category,
        onClick: (idx) => {
          alert(data.idx);
        }
      });
      return null;
    });
    setData(contents);
  }, []);

  useEffect(() => {
    const contents = [];
    memoData.map((data) => {
      contents.push({
        idx: data.idx,
        date: data.date,
        writer: data.writer,
        memo: memoSummary(data.memo),
        onClick: (idx) => {
          alert(data.idx);
        }
      });
      return null;
    });
    setMemoData(contents);
  }, []);

  return (
    <>
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
                      <CustomerInfoTable
                        info={['*분류', '*고객명', '*지역', '대표전화']}
                        info0={
                          <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={category}
                              onChange={handleChange}
                              label="Age"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        }
                        info1={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                          />
                        }
                        info2={
                          <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={category}
                              onChange={handleChange}
                              label="Age"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
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
                      <CustomerInfoTable
                        info={['구매담당자', '직위', '전화', 'e-mail']}
                        info0={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                          />
                        }
                        info1={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                          />
                        }
                        info2={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                          />
                        }
                        info3={
                          <TextField
                            id="standard-basic"
                            label=""
                            variant="standard"
                            size="small"
                            fullWidth
                          />
                        }
                        minW={650}
                      />
                    </CardContent>
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
