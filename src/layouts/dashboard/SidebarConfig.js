import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '메인 홈',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: '로그인(접속시)',
    path: '/login',
    icon: getIcon(lockFill)
  },

  {
    title: '고객목록',
    path: '/dashboard/newCustomer',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '고객등록',
    path: '/dashboard/addCustomer',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '주문목록',
    path: '/dashboard/orders',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '주문등록',
    path: '/dashboard/AddOrder',
    icon: getIcon(shoppingBagFill)
  }
];

export default sidebarConfig;
