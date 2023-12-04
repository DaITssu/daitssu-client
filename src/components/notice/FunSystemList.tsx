import * as styles from './NoticeList.styles';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { getFunSystemAPIwithCategory } from '@/apis/noticeAPIS';

const NoticeList: FC<{ category: string; search: string }> = ({
  category,
  search,
}) => {
  const [funSystemData, setFunSystemData] = useState<NoticeItemProps[]>([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);

  const fetchFunSystemData = async () => {
    try {
      setFetching(true);
      const funSystemData = await getFunSystemAPIwithCategory(
        search,
        category,
        page,
      );

      if (funSystemData) {
        if (page === 0) {
          setFunSystemData(funSystemData.data.content);
        } else {
          setFunSystemData((prev) => [...prev, ...funSystemData.data.content]);
        }
      } else {
        console.error(
          '펀시스템 데이터를 불러오는 중 오류 발생:',
          funSystemData.message,
        );
      }
      setFetching(false);
    } catch (error) {
      console.error('펀시스템 데이터를 불러오는 중 오류 발생:', error);
    }
  };
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      fetchFunSystemData();
    }
  };

  useEffect(() => {
    setPage(0);
    fetchFunSystemData();
  }, [search, category]);

  useEffect(() => {
    fetchFunSystemData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <styles.NoticeListBoxShort>
      {funSystemData.map((item: NoticeItemProps) => {
        return <NoticeItem key={item.id} item={item} type="funsystem" />;
      })}
    </styles.NoticeListBoxShort>
  );
};

export default NoticeList;
