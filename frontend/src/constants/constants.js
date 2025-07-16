import WeekendIcon from '@mui/icons-material/Weekend';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
export const iconComponents = {
  WeekendIcon,
  PhoneIphoneIcon,
  CheckroomIcon,
  RollerSkatingIcon,
};

export const CATEGORIES = [
  {
    title: 'Одежда',
    icon: 'CheckroomIcon',
    url: '/clothes',
    value: 'clothes',
  },
  {
    title: 'Электроника',
    icon: 'PhoneIphoneIcon',
    url: '/mobile',
    value: 'mobile',
  },
  {
    title: 'Фурнитура для дома',
    icon: 'WeekendIcon',
    url: '/furniture',
    value: 'furniture',
  },
  {
    title: 'Обувь',
    icon: 'RollerSkatingIcon',
    url: '/shoes',
    value: 'shoes',
  },
];
