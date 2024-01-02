import { atom } from 'recoil';
import { persistAtom } from './userNavAtom';

const isBrowser = typeof window !== 'undefined';

export const loginAtom = atom<boolean>({
  key: 'loginAtom',
  default: false,
  effects_UNSTABLE: isBrowser ? [persistAtom] : [],
});

export const accessTokenAtom = atom<string>({
  key: 'accessToken',
  default: '',
  effects_UNSTABLE: isBrowser ? [persistAtom] : [],
});

export const refreshTokenAtom = atom<string>({
  key: 'refreshToken',
  default: '',
  effects_UNSTABLE: isBrowser ? [persistAtom] : [],
});
