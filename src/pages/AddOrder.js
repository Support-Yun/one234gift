import { memo, useEffect, useState } from 'react';
import {
    Paper,
    Stack,
    TextField,
    Select,
    Grid,
    MenuItem,
    Button,
    FormControl,
    Container,
    InputLabel
} from '@mui/material';
import Page from '../components/Page';

export default function AddOrder() {
    const [State, setState] = useState();
    const StateHandleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <Page title="User | Minimal-UI">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item md={12} lg={6} xs={6}>

                        <div style={{ width: "200px", position: "relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Button variant="contained" onClick={() => alert()} style={{position: "absolute", right:-90 }}>저장</Button>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: '0' }}>
                                <InputLabel id="demo-simple-select-label">상태변경</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={State}
                                    label="State"
                                    onChange={StateHandleChange}
                                >
                                    <MenuItem value="등록" onClick={() => alert()}>등록</MenuItem>
                                    <MenuItem value="수정" onClick={() => alert()}>수정</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item md={12} lg={12} xs={6}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <TextField label="주문번호" style={{ margin: 20 }} />
                            <TextField label="판매구분" style={{ margin: 20 }} />
                            <TextField label="날짜" style={{ margin: 20 }} />
                            <TextField label="업체명" style={{ margin: 20 }} />
                            <TextField label="상품" style={{ margin: 20 }} />
                            <TextField label="수량" style={{ margin: 20 }} />
                            <TextField label="총 매입가격" style={{ margin: 20 }} />
                            <TextField label="총 매출가격" style={{ margin: 20 }} />
                            <TextField label="배송지 정보" style={{ margin: 20 ,width:"400px"}} />
                        </Paper>
                    </Grid>
                    <Grid item md={12} lg={6} xs={6}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="메모작성"
                                multiline
                                fullWidth
                                rows={3}
                                defaultValue="메모를 입력해 주세요"
                            />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Page>
    );
}
