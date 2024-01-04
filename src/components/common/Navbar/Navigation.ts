export const NAV_LIST = {
  HOME: 'HOME',
  COMMUNITY: 'COMMUNITY',
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  CALENDAR: 'CALENDAR',
  MY_PAGE: 'MY_PAGE',
} as const;

export const NAV_URL_LIST = {
  [NAV_LIST.HOME]: '/',
  [NAV_LIST.ANNOUNCEMENT]: '/notice',
  [NAV_LIST.COMMUNITY]: '/community',
  [NAV_LIST.CALENDAR]: '/calendar',
  [NAV_LIST.MY_PAGE]: '/myPage',
} as const;
