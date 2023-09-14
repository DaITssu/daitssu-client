import { useState } from 'react';
import CalendarScreen from '@/components/Calendar/CalendarScreen';
import Header from '@/components/common/Header/Header';

export default function Calendar() {
  return (
    <>
      <Header />
      <CalendarScreen />
    </>
  );
}
