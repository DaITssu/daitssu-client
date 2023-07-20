// Calendar.stories.tsx

import React from 'react';
import DayBlock from './DayBlock';
export default {
  title: 'DayBlock',
  component: DayBlock,
};

export const PrimaryDayBlock = () => <DayBlock day={3} taskColors={["#ff0000","#aa0000"]}/>;
PrimaryDayBlock.storyName = 'Primary DayBlock';
