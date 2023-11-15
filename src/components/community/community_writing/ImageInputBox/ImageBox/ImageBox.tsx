import React from 'react';
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
