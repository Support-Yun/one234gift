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


const categoryList = ["분류", "은행", "우체국"];
const locationList = ["지역", "서울특별시", "부산광역시"];


export default function AddOrder() {
    const [location, setLocation] = useState("지역");
    return (
        <Page title="User | Minimal-UI">
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item md={12} lg={6} xs={6}>
                        <Select>
                            {/* <TextField value={customerName} onChange={({ target }) => customerNameChangeHandler(target)} id="outlined-basic" label="고 객 명" style={margin10Right} variant="outlined" />
                            {locationList.map((data) => <MenuItem value={data}>{data}</MenuItem>)} */}
                        </Select>
                    </Grid>
                    <Grid item md={12} lg={6} xs={6}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <TextField label="Outlined" />
                            <TextField label="e" />
                            <TextField label="w" />
                            <TextField label="q" />
                            <TextField label="d" />
                            <TextField label="s" />
                            <TextField label="a" />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}
