import {useState} from 'react';
import {
  Grid,
  Card,
  CardContent,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
  CardHeader,
  ButtonGroup,
  Checkbox,
  ListItemButton,
  ListItemText,
  Chip
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Customer() {
  const [searchLocationText, setSearchLocationText] = useState('');
  const [currentSearchLocation, setCurrentSearchLocation] = useState([]);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ];


/**
 * handler
 */
  const locations = ['서울특별시', '강원도','경기도','충청남도','충청북도','전라남도','전라북도'];
  function handleKeyUpSearchLocation({target}){
    setSearchLocationText(target.value);
    const value = target.value.trim();
    if(value === ''){
      setCurrentSearchLocation([]);
      return;
    }
    const result = [];
    locations.map(location=>{
      if(location.includes(value)){
        result.push(location);
      }
      return null;
    });
    setCurrentSearchLocation(result);
  }

  function handleClickSearchLocationList(location){
    setSearchLocationText(location);
    setCurrentSearchLocation([]);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField fullWidth label="고객 업체명" variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">분류</InputLabel>
                  <Select label="분류" value="선택">
                    <MenuItem value="선택">선택</MenuItem>
                    <MenuItem value="우리은행">우리은행</MenuItem>
                    <MenuItem value="수협">수협</MenuItem>
                    <MenuItem value="농협">농협</MenuItem>
                    <MenuItem value="우체국">우체국</MenuItem>
                    <MenuItem value="국민건강보험공단">국민건강보험공단</MenuItem>
                    <MenuItem value="근로복지공단">근로복지공단</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth value={searchLocationText} onChange={(event)=>handleKeyUpSearchLocation(event)} label="지역" variant="outlined" />
                <div>
                  <Paper elevation={0} >
                    {currentSearchLocation.map(location=>(
                      <ListItemButton component="div">
                        <ListItemText primary={location} onClick={()=>handleClickSearchLocationList(location)}/>
                      </ListItemButton>  
                    ))}
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" size="large" fullWidth>
                  찾기
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">정렬 기준</InputLabel>
                  <Select label="정렬 기준" value={30}>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">보기</InputLabel>
                  <Select label="보기" value={10}>
                  <MenuItem value={10}>10개씩 보기</MenuItem>
                  <MenuItem value={30}>30개씩 보기</MenuItem>
                  <MenuItem value={50}>50개씩 보기</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={2}>
                <Button variant="outlined" size="large" fullWidth color="error">
                  고객 등록
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" size="large" fullWidth color="success">
                  관심 고객 등록
                </Button>
              </Grid>
            </Grid>
            <br />
            <TableContainer component={Paper}>
              <Chip label="* 총 [100]건의 고객 리스트 데이터가 존재합니다." variant="outlined" color="primary" />
              <br/>
              <br/>
              <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ width: 10 }} />
                    <TableCell align="center">고객 업체명</TableCell>
                    <TableCell align="center">고객 분류</TableCell>
                    <TableCell align="center">고객 지역</TableCell>
                    <TableCell align="center">고객 상태</TableCell>
                    <TableCell align="center">주문 내역</TableCell>
                    <TableCell align="center">영업 내역</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover style={{ cursor: 'pointer' }}>
                    <TableCell align="center" style={{ width: 10 }}>
                      <Checkbox {...{ inputProps: { 'aria-label': 'Checkbox demo' } }} />
                    </TableCell>
                    <TableCell align="center">고객 업체명</TableCell>
                    <TableCell align="center">고객 분류</TableCell>
                    <TableCell align="center">고객 지역</TableCell>
                    <TableCell align="center">고객 상태</TableCell>
                    <TableCell align="center">
                      <Button>보기</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button>보기</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>이전</Button>
              <Button>다음</Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
