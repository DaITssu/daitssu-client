import * as styles from './NoticeList.style';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';

const NoticeList: FC<{ items: NoticeItemProps[] }> = ({ items }) => {
  const [mounted, setMounted] = useState<boolean>(false); //기본 브라우저의 클라이언트 사이드 렌더링 제거

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <styles.NoticeListBoxShort>
        {items.map((item: NoticeItemProps, key: number) => {
          return <NoticeItem key={key} item={item} />;
        })}
      </styles.NoticeListBoxShort>
    )
  );
};

export default NoticeList;
3