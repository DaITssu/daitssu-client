import React from 'react';
import ServiceNoticeInfo, { ServiceNoticeInfoProps } from './ServiceNoticeInfo'; // 실제 컴포넌트 경로로 수정
import { ServiceNoticeItemProps } from '../ServiceNoticeItem';
import type { Story } from '@storybook/react';

export default {
  component: ServiceNoticeInfo,
  title: 'MyPage/ServiceNoticeInfo',
};

const Template: Story<ServiceNoticeInfoProps> = (
  args: ServiceNoticeInfoProps,
) => <ServiceNoticeInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '6/23 (금) 시스템 점검 및 업데이트 안내',
  createdAt: '2023/05/11',
  content:
    '안녕하세요 다잇슈입니다. 더욱 쾌적하고 안정적인 서비스 지원을 위해 아래와 같이 점검이 진행됩니다.',
};
