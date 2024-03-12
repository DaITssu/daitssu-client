import * as styles from './NoticeList.styles';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, useState, useEffect, useRef } from 'react';
import { getNoticeAPIwithCategory } from '@/apis/noticeAPIs';

const NoticeList: FC<{ category: string; search: string }> = ({
  category,
  search,
}) => {
  const [noticeData, setNoticeData] = useState<NoticeItemProps[]>([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        setFetching(true);
        const response = await getNoticeAPIwithCategory(search, category, page);
        if (response) {
          const newNoticeData = response.data.notices;
          if (page === 0) {
            setNoticeData(newNoticeData);
          } else {
            setNoticeData((prevData) => [...prevData, ...newNoticeData]);
          }
          if (response.data.notices.length == 10) {
            setFetching(false);
          }
        } else {
          console.error('Failed to fetch notice data');
          setFetching(false);
        }
      } catch (error) {
        console.error('Error fetching notice data:', error);
      }
    };

    fetchNoticeData();
  }, [search, category, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fetching) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [fetching]);

  return (
    <styles.NoticeListBoxShort>
      {noticeData.map((item: NoticeItemProps, index: number) => (
        <div key={`${item.id}-${index}`}>
          <NoticeItem item={item} type="notice" />
        </div>
      ))}
      <div ref={lastItemRef}></div>
    </styles.NoticeListBoxShort>
  );
};

export default NoticeList;
