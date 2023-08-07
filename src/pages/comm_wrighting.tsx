import { format } from 'path';
import React, { ChangeEvent, useState } from 'react';
import { FiCamera } from 'react-icons/fi'; // react-icons에서 FiCamera 아이콘 불러오기


const maintext='내용을 입력해주세요\n\n\n\n커뮤니티에서는 주제와 무관히 자유롭게 이야기를 나눌 수 있습니다.\n - 커뮤니티 게시글 및 댓글은 로그인을 해야만 작성할 수 있습니다.\n - 커뮤니티에서 모든 게시글 및 댓글의 작성자는 작성자의 닉네임으로 표시됩니다.\n - 홍보성 게시글이나 제제가 필요한 게시물 및 댓글은 관리자에 의해 예고없이 삭제될 수 있습니다.'

interface FormData {
  title: string;
  content: string;
  selectedValue: string;
  previewImage: string[]; // 이미지 미리보기를 위한 string 배열
}

export default function CommunityWriting() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    selectedValue:"",
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
      const newImages: File[] = Array.from(files); // 선택한 이미지 파일들을 배열로 변환

      Promise.all(newImages.map((file) => getImageDataUrl(file)))
        .then((imagePreviews) => {
          // 중복 이미지를 제거한 후 새 이미지만 추가
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 폼 데이터와 선택된 파일을 처리하는 로직을 여기에 추가하세요
    console.log(formData);
    // 데이터 처리가 완료되면 서버로 보내거나 다른 동작을 수행할 수 있습니다.

    // 처리가 완료되면 submitMessage 상태를 변경하여 텍스트를 렌더링합니다.
    setSubmitMessage('글이 성공적으로 제출되었습니다!');
  };

  // setSubmitMessage 함수를 정의합니다.
  const setSubmitMessage = (message: string) => {
    // 여기에 상태를 업데이트하거나 다른 처리를 추가할 수 있습니다.
    console.log(message);
  };

  return (
    <>
      <form className="write" onSubmit={handleSubmit}>
        <div className='submitBox'>
          <button>X </button>
          <a>글쓰기</a>
          <button type="submit">완료</button>
        </div>
        <div className='selectList'>
          <label htmlFor="selectList">주제</label>
          <select id="selectList" name="selectedValue" value={formData.selectedValue}
            onChange={handleSelectedChange}>
            <option value="잡담">잡담</option>
            <option value="인기글">인기글</option>
            <option value="정보">정보</option>
            <option value="질문">질문</option>
          </select>
        </div>

        <input
          className="title"
          name="title"
          autoComplete="off"
          placeholder="글 제목"
          value={formData.title}
          onChange={handleChange}
        />
        <br/>
        <textarea
          className="smallplaceholder"
          name="content"
          placeholder={maintext}
          value={formData.content}
          onChange={handleChange}
          rows="20"
          cols="50"
        />
        <br/>
        <label htmlFor="imageInput">이미지 선택:</label>
        <br/>
        <div>
          {/* ... */}
          {formData.previewImage.length === 0 ? null : (
            <>
              {formData.previewImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`이미지 미리보기 ${index}`}
                  width="100"
                  height="100"
                />
              ))}
            </>
          )}
        <label htmlFor="imageInput" className='IconBox'>
          <FiCamera size={40} /> {/* 카메라 아이콘 사용 */}  
        </label>
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

      </form>
    </>
  );
}
