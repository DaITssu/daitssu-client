import Home_Off from '@icons/icon/Nav/home_off.svg';
import Home_On from '@icons/icon/Nav/home_on.svg';
import Anouncement_Off from '@icons/icon/Nav/announcement_off.svg';
import Anouncement_On from '@icons/icon/Nav/announcement_on.svg';
import Community_Off from '@icons/icon/Nav/community_off.svg';
import Community_On from '@icons/icon/Nav/community_on.svg';
import Calendar_Off from '@icons/icon/Nav/calendar_off.svg';
import Calendar_On from '@icons/icon/Nav/calendar_on.svg';
import My_On from '@icons/icon/Nav/my_on.svg';
import My_Off from '@icons/icon/Nav/my_off.svg';
import { NAV_LIST, NAV_URL_LIST } from './Navigation';

interface NavItemType {
  label: string;
  url: (typeof NAV_URL_LIST)[keyof typeof NAV_URL_LIST]; // NAV_URL_LIST의 value들을 상수처럼 쓰고 싶을 때 이렇게 사용
  icon: {
    active: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    default: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };
}

export const NAV_INFO = {
  [NAV_LIST.HOME]: {
    label: '홈',
    url: NAV_URL_LIST.HOME,
    icon: {
      active: Home_On,
      default: Home_Off,
    },
  },
  [NAV_LIST.NOTICE]: {
    label: '공지사항',
    url: NAV_URL_LIST.NOTICE,
    icon: {
      active: Anouncement_On,
      default: Anouncement_Off,
    },
  },
  [NAV_LIST.CALENDAR]: {
    label: '캘린더',
    url: NAV_URL_LIST.CALENDAR,
    icon: {
      active: Calendar_On,
      default: Calendar_Off,
    },
  },
  [NAV_LIST.COMMUNITY]: {
    label: '커뮤니티',
    url: NAV_URL_LIST.COMMUNITY,
    icon: {
      active: Community_On,
      default: Community_Off,
    },
  },
  [NAV_LIST.MY_PAGE]: {
    label: '마이 페이지',
    url: NAV_URL_LIST.MY_PAGE,
    icon: {
      active: My_On,
      default: My_Off,
    },
  },
} as const satisfies Record<
  (typeof NAV_LIST)[keyof typeof NAV_LIST],
  NavItemType
>;
