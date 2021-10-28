import { Card, CardHeader, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import { styled } from '@mui/system';

const ItemButton = styled(Button)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(6),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const BoxCenter = styled('div')({
  display:'flex',
  alignItems:'center'
});


const data = [
  {
    name: '고객목록조회',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <WorkIcon fontSize="large" />
      </Avatar>
    ),
    onClick: (event) => {
      alert();
    }
  },
  {
    name: '고객등록',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <WorkIcon fontSize="large" />
      </Avatar>
    ),
    onClick: (event) => {
      alert();
    }
  },
  {
    name: '주문목록조회',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <WorkIcon fontSize="large" />
      </Avatar>
    ),
    onClick: (event) => {
      alert();
    }
  },
  {
    name: '주문등록',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <WorkIcon fontSize="large" />
      </Avatar>
    ),
    onClick: (event) => {
      alert();
    }
  }
];

function QuickMenu({ name, icon, onClick }) {
  return (
    <ItemButton onClick={onClick} fullWidth size="large" color="inherit" variant="outlined">
      <Stack direction="row" spacing={2}>
        {icon}
        <BoxCenter>{name}</BoxCenter>
      </Stack>
    </ItemButton>
  );
}



export default function AppQuickMenu() {
  return (
    <Card>
      <CardHeader title="빠른메뉴" />
      <CardContent>
        <Stack direction="row" spacing={3}>
          {data.map((menu, idx) => (
            <QuickMenu key={idx} name={menu.name} icon={menu.icon} onClick={menu.onClick} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
