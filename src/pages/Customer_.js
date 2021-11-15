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
  ListItemText
} from '@mui/material';
import { styled } from '@mui/system';
import { memo, useEffect, useState } from 'react';
import CustomDataTable from '../components/table/Table_';
import CustomerInfoTable from '../components/table/CustomerInfoTable';
import Page from '../components/Page';
import DataTable from '../components/table/Table';

export default function NewCustomer_() {
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
      date:'21-03-06',
      writer: '윤지원',
      memo: '네, 가능합니다. 예전파일 재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지 > 재주문관리  메뉴에서 주문하셨던 기간 설정하신 후 재주문 하시기 바랍니다.'
    },
    {
      idx: 2,
      date:'21-03-06',
      writer: '윤지원',
      memo: '네, 가능합니다.'
    },
    {
      idx: 3,
      date:'21-03-06',
      writer: '민빌런',
      memo: '재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지.'
    },
    {
      idx: 4,
      date:'21-03-06',
      writer: '민빌런',
      memo: '재주문과 주문옵션변경 재주문 또한 가능합니다. 마이페이지.'
    },
    {
      idx: 5,
      date:'21-03-06',
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
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={3}>
                      <Stack direction="row" alignItems="center">
                        <p>관심고객만 보기</p>
                        <Switch {...label} defaultChecked />
                      </Stack>
                      <Stack direction="row" spacing={3}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <TextField id="standard-basic" label="고객명" variant="standard" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <InputLabel id="demo-simple-select-label">지역</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            label="location"
                            onChange={locationHandleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                          <InputLabel id="demo-simple-select-label">분류</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="category"
                            onChange={locationHandleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained">찾기</Button>
                      <Button variant="contained" color="error">
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
                  <CustomDataTable
                    data={data}
                    size="small"
                    ignoreKey={['location', 'category', 'state']}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardContent>
                      <CustomerInfoTable
                        info={['고객명', '대표전화', 'FAX', '영업담당자']}
                        info0="국민건강보험공단의정부지사"
                        info1="010-321-3213"
                        info2="032-342-4141"
                        info03="user1"
                        minW={650}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Card>
                    <CardContent>
                      <CustomerInfoTable
                        info={['구매담당자', '직위', '전화', 'e-mail']}
                        info0="정혜영"
                        info1="과장"
                        info2="032-342-4141"
                        info3="asdf24@hanmail.com"
                        minW={650}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Card>
                    <CardContent>
                      <Stack direction="column" spacing={3}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          divider={<Divider orientation="vertical" flexItem />}
                          spacing={2}
                        >
                          <Item>
                            <ListItemText primary="작성자" secondary="윤지원" />
                          </Item>
                          <Item>
                            <ListItemText primary="날짜" secondary="21-11-15" />
                          </Item>
                          <Item>
                            <ListItemText primary="예약콜" secondary="-" />
                          </Item>
                          <Stack alignItems="flex-end">
                            <Stack direction="row" alignItems="center">
                              <p>샘플</p>
                              <Switch {...label} />
                            </Stack>
                            <Stack direction="row" alignItems="center">
                              <p>카탈로그</p>
                              <Switch {...label} />
                            </Stack>
                          </Stack>
                        </Stack>
                        <TextField
                          id="outlined-multiline-static"
                          label="메모작성"
                          multiline
                          fullWidth
                          rows={3}
                          defaultValue="Default Value"
                        />
                        <div
                          style={{ height: '140px', backgroundColor: '#ddd', overflowY: 'auto' }}
                        >
                          <CustomDataTable data={memoData} ignoreKey={['idx']} size="small" />
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Card>
                    <CardContent>주문 이력/수정이력 등등</CardContent>
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
