import React from 'react';
import ImageBox from './ImageBox/ImageBox';
import IconBox from './IconBox/IconBox';
import TitleBox from './TitleBox/TitleBox';

interface FormData {
  previewImage: string[]; // 이미지 미리보기를 위한 string 배열
  handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void; // onChange 타입 변경
}

const ImageInputBox = ({previewImage,handleImageChange }:FormData) => {
  return (
    <>
    <TitleBox fontSize={16}/>
    <div style={{display:"flex"}}>
      {previewImage.length === 0 ? null : (
        <>
          {previewImage.map((image, index) => (
            <ImageBox key={index} index={index} image={image}/>
          ))}
        </>
      )}
      <IconBox/>
      <input
        type="file"
        id="imageInput"
        name="previewImage"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        hidden
      />
    </div>
    </>
  );
};

export default ImageInputBox;
