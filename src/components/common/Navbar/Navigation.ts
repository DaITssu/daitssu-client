export const NAV_LIST = {
  HOME: 'HOME',
  COMMUNITY: 'COMMUNITY',
  NOTICE: 'NOTICE',
  CALENDAR: 'CALENDAR',
  MY_PAGE: 'MY_PAGE',
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.HOME]: '/',
  [NAV_LIST.NOTICE]: '/notice',
  [NAV_LIST.COMMUNITY]: '/community',
  [NAV_LIST.CALENDAR]: '/calendar',
  [NAV_LIST.MY_PAGE]: '/my',
} as const;
