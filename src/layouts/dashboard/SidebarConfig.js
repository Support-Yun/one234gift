import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '메인 홈',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: '고객목록',
    path: '/dashboard/customer',
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
