import React from 'react';
import ImageBox from './ImageBox/ImageBox';
import IconBox from './IconBox/IconBox';
import TitleBox from './TitleBox/TitleBox';
import { COLORS } from '@/styles/constants/colors';
interface FormData {
  previewImage: string[]; 
  Width?:number;
  handleImageChange:(event: React.ChangeEvent<HTMLInputElement>) => void; 
  handleDeleteImage:(indexToDelete: number) => void;
}

const ImageInputBox = ({previewImage,handleImageChange,Width,handleDeleteImage }:FormData) => {
  var width="500px";
  if (Width){
    width=Width+"px";
  }
  const onClickX=(index:number)=>{
    handleDeleteImage(index);    
  };
  return (
    <>
    <TitleBox/>
    <div style={{display:"flex", overflowX: "visible", width:width}}>
      {previewImage.length === 0 ? null : (
        <>
          {previewImage.map((image, index) => (
            <div style={{position: "relative",width:"100px",marginRight:"10px"}}>
              <div style={{position: "relative" }}>
                <div style={{position: "absolute", left:"0px", top: "1px"}}>
                  <ImageBox index={index} image={image}/>
                </div>
                <button style={{position: "absolute", right:"10px", top: "10px",
              borderRadius:"9px",backgroundColor:COLORS.grayscale.white,
              width: "18px", height:"18px",
              display: "flex", 
              justifyContent: "center", border: "none",
              alignItems: "center" }} onClick={()=>onClickX(index)}>
                  X
                </button>
              </div>
            </div>
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
