import type { Meta, StoryObj } from '@storybook/react';

import ArticleComponent from './ArticleComponent';

const ArticleMeta: Meta<typeof ArticleComponent> = {
  title: 'Test',
  component: ArticleComponent,
};

export default ArticleMeta;
type Story = StoryObj<typeof ArticleComponent>;

export const ArticleExample: Story = {
  args: {
    article: {
      slug: 'how-to-train-your-dragon',
      title: 'How to train your dragon',
      description: 'Ever wonder how?',
      body: 'It takes a Jacobian',
      tagList: ['dragons', 'training'],
      createdAt: '2016-02-18T03:22:56.637Z',
      updatedAt: '2016-02-18T03:48:35.824Z',
      favorited: false,
      favoritesCount: 10,
      author: {
        username: 'jake',
        bio: 'I work at statefarm',
        image: 'https://i.stack.imgur.com/xHWG8.jpg',
        following: false,
      },
    },
  },
};
