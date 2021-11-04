import { Card, CardHeader, CardContent } from '@mui/material';
import { height, styled } from '@mui/system';
import { useEffect, useState } from 'react';
import DataTable from '../../table/Table';

const NoticeCard = styled(Card)(()=>({
  height:'100%'
}));

export default function AppNotice() {
  const [data, setData] = useState([{idx:1,name:'고객명1',when:'2021-11-03',type:'예약콜'}]);

  const noticeTableHeader = ["고객명","예약 날짜", "분류"];

  useEffect(()=>{
    const contents = [];
    data.map((d,idx)=>{
      contents.push(
        {
          idx : d.idx,
          name : d.name,
          when : d.when,
          type : <mark>d.type</mark>,
          onClick : ()=>alert(d.idx),
          hover : ()=>alert('호버 ?')
        }
      );
      return null;
    });
    setData(contents);
  },[]);

  return (
    <NoticeCard>
      <CardHeader title="예약콜 목록" />
      <CardContent>
        <DataTable 
            header={noticeTableHeader}
            data={data}            
        />
      </CardContent>
    </NoticeCard>
  );
}
