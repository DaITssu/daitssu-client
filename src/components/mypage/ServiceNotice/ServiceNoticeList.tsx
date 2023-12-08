import styled from '@emotion/styled';
import * as styles from './ServiceNoticeList.styles';
import ServiceNoticeItem, { ServiceNoticeItemProps } from './ServiceNoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';

const ServiceNoticeList = () => {

  const [items, setItems] = useState([]);

  return (
    <styles.NoticeListBox>
      {items.map((item: ServiceNoticeItemProps, key: number) => {
        return <ServiceNoticeItem key={key} item={item} />;
      })}
    </styles.NoticeListBox>
  );
};

export default ServiceNoticeList;
