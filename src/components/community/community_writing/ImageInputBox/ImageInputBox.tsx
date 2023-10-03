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
              justifyContent: "center", border: "None",
              alignItems: "center" }} onClick={()=>onClickX(index)}>
                  <svg width="60" height="60" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7116 0.298256C12.3271 -0.0862721 11.7059 -0.0862721 11.3214 0.298256L6.5 5.10978L1.67861 0.288396C1.29408 -0.096132 0.672924 -0.096132 0.288396 0.288396C-0.096132 0.672924 -0.096132 1.29408 0.288396 1.67861L5.10978 6.5L0.288396 11.3214C-0.096132 11.7059 -0.096132 12.3271 0.288396 12.7116C0.672924 13.0961 1.29408 13.0961 1.67861 12.7116L6.5 7.89022L11.3214 12.7116C11.7059 13.0961 12.3271 13.0961 12.7116 12.7116C13.0961 12.3271 13.0961 11.7059 12.7116 11.3214L7.89022 6.5L12.7116 1.67861C13.0863 1.30394 13.0863 0.672924 12.7116 0.298256Z" fill="black"/>
                  </svg>

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
