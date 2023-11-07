import * as styles from '../../../styles/constants/NoticeList.style';
import NoticeItem, { NoticeItemProps } from '../../notice/NoticeItem';
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