import { Card, CardHeader, CardContent, Stack, IconButton } from '@mui/material';
import { height, styled } from '@mui/system';
import { useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DataTable from '../../table/Table';
import Label from '../../Label';

const NoticeCard = styled(Card)(() => ({
  height: '100%'
}));

export default function AppNotice() {
  const [data, setData] = useState([
    { idx: 1, name: '국민건강보험공단부산북부지사고객지원부', when: '2021-11-03' },
    { idx: 2, name: '한국전력공사울산지사', when: '2021-11-03' },
    { idx: 3, name: '의정부우체국', when: '2021-11-15' },
    { idx: 4, name: '국민건강보험공단부산북부지사고객지원부', when: '2021-11-03' },
    { idx: 5, name: '한국전력공사울산지사', when: '2021-11-03' },
    { idx: 6, name: '의정부우체국', when: '2021-11-15' }
  ]);

  const noticeTableHeader = ['번호', '고객명', '예약 날짜'];

  useEffect(() => {
    const contents = [];
    data.map((data, idx) => {
      contents.push({
        idx: data.idx,
        name: data.name,
        // when: data.when,
        when: (
          <Label variant="ghost" color="success">
            {data.when}
          </Label>
        ),
        onClick: (i) => alert(i),
        hover: () => alert('호버 ?')
      });
      return null;
    });
    setData(contents);
  }, []);

  return (
    <NoticeCard>
      <CardHeader title="예약콜 목록" />
      <CardContent>
        <DataTable header={noticeTableHeader} data={data} ignoreKey={['onClick', 'hover']} />
        <br />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <IconButton aria-label="perveBtn">
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton aria-label="nextBtn">
            <KeyboardArrowRightIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </NoticeCard>
  );
}
