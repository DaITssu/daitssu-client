import { atom } from 'jotai';
import { User } from '../types/user';

export const userAtom = atom<User | null>(null);
