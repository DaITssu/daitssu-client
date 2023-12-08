import React from 'react';
import { Story, Meta } from '@storybook/react';
import CommunityList from './CommunityList'; // 실제 파일의 경로로 변경해주세요

export default {
  title: 'Community/CommunityList',
  component: CommunityList,
} as Meta;

const Template: Story = (args) => <CommunityList key={""} isButtonVisible = {false} search = {""} />;

export const Default = Template.bind({});
Default.args = {
  items : [
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요~~~~~~~~~~~~~~~~?\n",minutes : 3, review : 5},
    {bundle:"asdfasdf",title : "장학금 언제 줘요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 999},
    {bundle:"aaaaaa",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
  ]
};