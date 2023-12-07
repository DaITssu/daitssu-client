import React from 'react';
import { Story, Meta } from '@storybook/react';

import CommunityListItem, { CommunityItemProps } from './CommunityListItem'; // 경로를 실제 파일의 경로로 변경해주세요

export default {
  title: 'Community/CommunityListItem',
  component: CommunityListItem,
} as Meta;

interface Props {
  item: CommunityItemProps;
}

const Template: Story<Props> = (args) => <CommunityListItem {...args} />;

export const Example = Template.bind({});
Example.args = {
  item: {
    id : 1,
    topic: "CHAT",
    title: "주제",
    content : "오늘 뭐하지?",
    writerNickName : "이주희",
    updatedAt : "2023-11-25 08:38:08",
    imageUrls : {"url": ["https://daitssu-bucket.s3.ap-northeast-2.amazonaws.com/com.example/COMMUNITY/2/image/2023-11-28T09%3A34%3A00.912552-porori.jpg", "https://daitssu-bucket.s3.ap-northeast-2.amazonaws.com/com.example/COMMUNITY/2/image/2023-11-28T09%3A34%3A01.197213-porori2.jpg"]},
    review : 1,
  },
};
  