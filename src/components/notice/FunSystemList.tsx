import * as styles from './NoticeList.styles';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, useState, useEffect, useRef } from 'react';
import { getFunSystemAPIwithCategory } from '@/apis/noticeAPIs';

const NoticeList: FC<{ category: string; search: string }> = ({
  category,
  search,
}) => {
  const [funSystemData, setFunSystemData] = useState<NoticeItemProps[]>([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchFunSystemData = async () => {
      try {
        setFetching(true);
        const response = await getFunSystemAPIwithCategory(
          search,
          category,
          page,
        );

        if (response) {
          const newFunSystemData = response.data.funSystems;
          if (page === 0) {
            setFunSystemData(newFunSystemData);
          } else {
            setFunSystemData((prevData) => [...prevData, ...newFunSystemData]);
          }
          if (newFunSystemData.length == 10) {
            setFetching(false);
          }
        } else {
          console.error('Failed to fetch fun system data');
          setFetching(false);
        }
      } catch (error) {
        console.error('Error fetching fun system data:', error);
      }
    };

    fetchFunSystemData();
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
      {funSystemData.map((item: NoticeItemProps, index: number) => (
        <div key={`${item.id}-${index}`}>
          <NoticeItem item={item} type="funsystem" />
        </div>
      ))}
      <div ref={lastItemRef}></div>
    </styles.NoticeListBoxShort>
  );
};

export default NoticeList;
