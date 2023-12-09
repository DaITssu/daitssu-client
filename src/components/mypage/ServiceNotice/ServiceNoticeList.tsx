import styled from '@emotion/styled';
import * as styles from './ServiceNoticeList.styles';
import ServiceNoticeItem, { ServiceNoticeItemProps } from './ServiceNoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { getServiceNoticeAPI } from '@/apis/serviceNoticeAPIS';

const ServiceNoticeList = () => {

  const [serviceNoticeItems, setServiceNoticeItems] = useState<ServiceNoticeItemProps[]>([]);

  const fetchServiceNoticeData = async() =>{
    try{
      const serviceNoticeData = await getServiceNoticeAPI();
      if(serviceNoticeData){
        console.log('data : ',serviceNoticeData.data);
        setServiceNoticeItems(serviceNoticeData.data);
      }
      
    }catch(error){
      console.error('서비스 공지사항 리스트 데이터 불러오는 중 오류 발생 : ', error);
    }
  }

  useEffect(()=>{
    fetchServiceNoticeData();
  },[serviceNoticeItems]);

  return (
    <styles.NoticeListBox>
      {serviceNoticeItems.map((item: ServiceNoticeItemProps, key: number) => {
        return <ServiceNoticeItem key={key} item={item} />;
      })}
    </styles.NoticeListBox>
  );
};

export default ServiceNoticeList;
