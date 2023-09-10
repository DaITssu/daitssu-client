import styled from '@emotion/styled';
import * as styles from './ServiceNoticeList.style';
import ServiceNoticeItem, { ServiceNoticeItemProps } from './ServiceNoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';



const ServiceNoticeList: FC <{items:ServiceNoticeItemProps[]}>= ({items}) => {
  const [mounted, setMounted] = useState<boolean>(false); //기본 브라우저의 클라이언트 사이드 렌더링 제거

  useEffect(() => {
    setMounted(true);
  }, []);



  return (
    mounted && (
      <styles.NoticeListBox>
        {items.map((item: ServiceNoticeItemProps, key: number) => {
          return <ServiceNoticeItem key={key} item={item} />;
        })}
      </styles.NoticeListBox>
    )
  );
};

export default ServiceNoticeList;
