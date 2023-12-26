import { NAV_INFO } from '@/components/common/Navbar/NavInfo';
import { NAV_LIST } from '@/components/common/Navbar/Navigation';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

type NavListType = keyof typeof NAV_INFO;

// nextJs는 ssr하기 때문에 마운트 됐을떄 atom참조하게 변환
const isBrowser = typeof window !== 'undefined';
const storage = isBrowser ? (window.localStorage as any) : null;

export interface IUserNavAtom {
  activeNavType: NavListType;
}

export const { persistAtom } = recoilPersist({
  key: 'navLocalStorage', //원하는 key 값 입력
  storage: storage,
});

export const userNavAtom = atom<IUserNavAtom>({
  key: 'userNavAtom',
  default: {
    activeNavType: NAV_LIST.HOME,
  },
  effects_UNSTABLE: isBrowser ? [persistAtom] : [], // 브라우저 환경에서만 persistAtom을 적용
});
