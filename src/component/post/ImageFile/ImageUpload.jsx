import axios from 'axios';
import heic2any from 'heic2any';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function ImageUpload({ setImageFile }) {
  const fileInput = useRef();
  const [prevImg, setPrevImg] = useState('');

  function handleImage() {
    let file = fileInput.current.files[0];
    if (file.name.split('.')[1] === 'heic') {
      const blob = fileInput.current.files[0];

      // eslint-disable-next-line func-names
      heic2any({ blob, toType: 'image/jpeg' }).then(function (resultBlob) {
        file = new File([resultBlob], `${file.name.split('.')[0]}.jpg`, {
          type: 'image/jpeg',
          lastModified: new Date().getTime(),
        });
        console.log('file', file);
        setImageFile(file);
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setPrevImg(reader.result);
      };
    } else {
      const type = file.type.split('/');
      if (type[0] !== 'image') {
        alert('이미지만 업로드 할 수 있습니다.');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setPrevImg(reader.result);
      };
    }
  }

  return (
    <div>
      <StImgContainer>
        <StImg alt="" src={prevImg} style={{ margin: 'auto' }} />
      </StImgContainer>
      <StLabel htmlFor="fileinput">
        <StImgUp
          alt="Logo"
          type="file"
          src="https://cdn-icons-png.flaticon.com/512/2360/2360557.png"
        />
        <StInput
          id="fileinput"
          type="file"
          ref={fileInput}
          name="file"
          onChange={() => {
            handleImage();
          }}
        />
      </StLabel>
    </div>
  );
}

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StImgUp = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StInput = styled.input`
  display: none;
`;
const StImgContainer = styled.div`
  /* width: 680px;
  height: 300px; */
  width: 100%;
  height: 400px;
  background: linear-gradient(
    to right,
    rgb(239, 143, 166) 0%,
    rgb(219, 67, 118) 50%,
    rgb(227, 25, 120) 100%
  ) !important;
  border: 4px solid pink;
`;
const StLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
`;
