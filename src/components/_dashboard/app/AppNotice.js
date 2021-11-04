import { Card, CardHeader, CardContent } from '@mui/material';
import { height, styled } from '@mui/system';
import { useEffect, useState } from 'react';
import DataTable from '../../table/Table';
import Label from '../../Label';

const NoticeCard = styled(Card)(() => ({
  height: '100%'
}));

export default function AppNotice() {
  const [data, setData] = useState([
    { idx: 1, name: '국민건강보험공단부산북부지사고객지원부', when: '2021-11-03', type: '예약콜' },
    { idx: 2, name: '한국전력공사울산지사', when: '2021-11-03', type: '예약콜' },{ idx: 3, name: '의정부우체국', when: '2021-11-15', type: '해피콜' }
  ]);

  const noticeTableHeader = ['고객명', '예약 날짜', '분류'];

  useEffect(() => {
    const contents = [];
    data.map((data, idx) => {
      contents.push({
        idx: data.idx,
        name: data.name,
        when: data.when,
        type: (
          <Label variant="ghost" color={(data.type === '예약콜' && 'error') || 'success'}>{data.type}
          </Label>
        ),
        onClick: () => alert(data.idx),
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
        <DataTable header={noticeTableHeader} data={data} />
      </CardContent>
    </NoticeCard>
  );
}
