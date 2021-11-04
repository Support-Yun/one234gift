import { Card, CardHeader, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {
  ContactPhone as ContactPhoneIcon,
  AddBusiness as AddBusinessIcon,
  PostAdd as PostAddIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { styled } from '@mui/system';

const ItemButton = styled(Button)(({ theme }) => ({
  ...theme.typography.h5,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  display: 'flex',
  justifyContent: 'flex-start',
  color: theme.palette.text.secondary
}));

const BoxCenter = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const data = [
  {
    name: '고객목록조회',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <ContactPhoneIcon fontSize="large" />
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
        <AddBusinessIcon fontSize="large" />
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
        <AssignmentIcon fontSize="large" />
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
        <PostAddIcon fontSize="large" />
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
      {icon}
      <BoxCenter>{name}</BoxCenter>
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
