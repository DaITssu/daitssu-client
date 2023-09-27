import type { Meta, StoryObj } from '@storybook/react';

import PopularPosts, { PostDetailProps } from './PopularPosts';

const meta: Meta<typeof PopularPosts> = {
  title: 'Home/PopularPosts',
  component: PopularPosts,
};
export default meta;

type Story = StoryObj<typeof PopularPosts>;

export const PopularPostsExample: Story = {
  args: {
    posts: [
      {
        id: 1,
        title: '제목',
        content: '내용',
        type: 'info',
        commentCount: 3,
        createdAt: '2021-10-10 10:10:10',
      },
      {
        id: 2,
        title: '제목',
        content:
          '내용나더라너라더라더ㅏㄹ날냗런댜ㅓㄹ자ㅡ라즈ㅏ냐나더라ㅣ너ㅣㅏ러니ㅏ더리ㅏㄷ너ㅣㅏ럳니ㅏㅓ릳너ㅣㅏ러ㅏ디너리ㅏㄴ더ㅏㅣ러ㅏㅣㄴ더ㅣㅏ러니다러ㅏ니ㅓㅏ더러쟈러다란르ㅏㄴㄷ르ㅏㅡ',
        type: 'info',
        commentCount: 5,
        createdAt: '2021-10-10 20:10:10',
      },
    ],
  },
};
