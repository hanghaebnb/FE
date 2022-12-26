import axios from 'axios';
import heic2any from 'heic2any';
import React, { useRef, useState } from 'react';

export default function ImageUpload({ imageFile, setImageFile }) {
  const fileInput = useRef();

  function handleImage() {
    let file = fileInput.current.files[0];
    if (file.name.split('.')[1] === 'heic') {
      const blob = fileInput.current.files[0];

      heic2any({ blob, toType: 'image/jpeg' }).then(function (resultBlob) {
        file = new File([resultBlob], `${file.name.split('.')[0]}.jpg`, {
          type: 'image/jpeg',
          lastModified: new Date().getTime(),
        });
        setImageFile(file);
      });
    } else {
      const type = file.type.split('/');
      if (type[0] !== 'imageFile') {
        alert('이미지만 업로드 할 수 있습니다.');
        return;
      }
      setImageFile(file);
    }
  }

  return (
    <div>
      <h2>이미지 미리보기</h2>
      <img src={imageFile} alt="preview-img" />
      <input type="file" ref={fileInput} name="file" onChange={handleImage} />
    </div>
  );
}
