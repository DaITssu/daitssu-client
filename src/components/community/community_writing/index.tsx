import { format } from 'path';
import React, { ChangeEvent, useState } from 'react';
import SubmitHeader from '@/components/community/community_writing/MainForm/MainForm';
import TitleForm from '@/components/community/community_writing/InputForm/TitleForm/TitleForm';
import HorizontalLine from '@/components/community/community_writing/HorizontalLine';
import TextForm from '@/components/community/community_writing/InputForm/TextForm/TextForm';
import ImageInputBox from '@/components/community/community_writing/ImageInputBox/ImageInputBox';
import { postCommunityWritingAPI } from '@/apis/communityAPIS';
import { UtilityHeaderProps, } from '@/components/common/Header/UtilityHeader';
import UtilityHeader from '@/components/common/Header/UtilityHeader';
import { COLORS } from '@/styles/constants/colors';
import { Background } from '@/components/notice/anouncement/SelectButton.style';

interface FormData {
  title: string;
  content: string;
  selectedValue: string;
  previewImage: string[]; // 이미지 미리보기를 위한 string 배열
}
const CommunityWriting=()=>{

  const maintext='내용을 입력해주세요\n\n\n\n\n\n\n커뮤니티에서는 주제와 무관히 자유롭게 이야기를 나눌 수 있습니다.\n - 커뮤니티 게시글 및 댓글은 로그인을 해야만 작성할 수 있습니다.\n - 커뮤니티에서 모든 게시글 및 댓글의 작성자는 작성자의 닉네임으로 표시됩니다.\n - 홍보성 게시글이나 제제가 필요한 게시물 및 댓글은 관리자에 의해 예고없이 삭제될 수 있습니다.'

  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    selectedValue:"잡담",
    previewImage:[]
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const getImageDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (typeof e.target!.result === 'string') {
          resolve(e.target!.result);
        } else {
          reject(new Error('Failed to read image data URL.'));
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages: File[] = Array.from(files); 
      Promise.all(newImages.map((file) => getImageDataUrl(file)))
        .then((imagePreviews) => {
          const uniqueImagePreviews = imagePreviews.filter(
            (image) => !formData.previewImage.includes(image)
          );

          setFormData((prevState) => ({
            ...prevState,
            previewImage: [...prevState.previewImage, ...uniqueImagePreviews],
          }));
        })
        .catch((error) => {
          console.error('Error converting images to data URL:', error);
        });
    }
  };
  

  const handleSubmit = async () => {
    console.log("request start");

    const response = await postCommunityWritingAPI({
      topic: formData.selectedValue,
      title: formData.title,
      content: formData.content,
      images: formData.previewImage,
    });
    console.log(response);
  };

  // setSubmitMessage 함수를 정의합니다.
  const args: UtilityHeaderProps = {
    child: '글쓰기',
    isConfirmBtn: true, //"확인"버튼 존재여부
    onClickConfrimBtn: handleSubmit, // "확인 버튼 클릭 시 동작
  };

  return (
    <>
    <UtilityHeader {...args}/>
    <div style={{ padding: "20px" ,backgroundColor: COLORS.grayscale.white,color:"black"}}>
      
      <form className="write">
        <SubmitHeader selectedValue={formData.selectedValue} onChange={handleSelectedChange}/>
        <TitleForm height={50} handleChange={handleChange} hint={"제목"} selectedValue={formData.title}
        />
        
        <HorizontalLine/>
        <TextForm name="content"
          hint={maintext}
          selectedValue={formData.content}
          handleChange={handleChange}
          rows={20}
          cols={50}></TextForm>
          
        <HorizontalLine/>
        
        <ImageInputBox previewImage={formData.previewImage} 
          handleImageChange={handleImageChange}/>

      
      </form>
    </div>

    </>)
  ;
};

export default CommunityWriting;