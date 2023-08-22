import React from 'react';
import { FiCamera } from 'react-icons/fi'; // react-icons에서 FiCamera 아이콘 불러오기
import * as styles from './ImageBox.styles';

interface FormData {
  index:number;
  image:string;
}

const ImageBox = ({index,image }:FormData) => {
  return (
    <>
    <styles.ImageBox src={image} alt={index.toString()}/>
    </>
  );
};

export default ImageBox;
