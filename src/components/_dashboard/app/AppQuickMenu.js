import { Card, CardHeader, CardContent } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

import {
  ContactPhone as ContactPhoneIcon,
  AddBusiness as AddBusinessIcon,
  PostAdd as PostAddIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { styled } from '@mui/system';

const ItemButton = styled(Button)`
  height: 80px;
  font-size: 19px;
  color: #4b4b4b;
`;

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
    link: '/dashboard/customer'
  },
  {
    name: '고객등록',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <AddBusinessIcon fontSize="large" />
      </Avatar>
    ),
    link: '/dashboard/addCustomer'
  },
  {
    name: '주문목록조회',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <AssignmentIcon fontSize="large" />
      </Avatar>
    ),
    link: '/dashboard/orders'
  },
  {
    name: '주문등록',
    icon: (
      <Avatar sx={{ width: 60, height: 60 }}>
        <PostAddIcon fontSize="large" />
      </Avatar>
    ),
    link: '/dashboard/AddOrder'
  }
];

function QuickMenu({ name, icon, onClick, link }) {
  return (
    <Link to={link} style={{ width: '100%', textDecoration: 'none' }}>
      <ItemButton onClick={onClick} fullWidth color="inherit" variant="outlined">
        {icon}
        <BoxCenter>{name}</BoxCenter>
      </ItemButton>
    </Link>
  );
}

export default function AppQuickMenu() {
  return (
    <Card>
      <CardHeader title="빠른메뉴" />
      <CardContent>
        <Stack direction="row" justifyContent="space-between" spacing={3}>
          {data.map((menu, idx) => (
            <QuickMenu
              key={idx}
              name={menu.name}
              icon={menu.icon}
              onClick={menu.onClick}
              link={menu.link}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
