import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { readRooms, updateRooms, deleteRooms } from '../redux/modules/roomSlice';
import Topbar from '../component/main/TopbarRoom';

export default function ShareId(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.rooms);
  console.log('posts', rooms); // id 지정
  const propsParam = useParams();
  const { id } = propsParam;
  // 수정하기
  const [edit, setEdit] = useState({
    title: '',
    description: '',
    price: '',
    address: '',
    type: '',
  });
  // 이미지 관련
  const [image, setImage] = useState(null);
  useEffect(() => {
    console.log(image);
  }, [image]);
  // 수정 토글 관련 use
  const [toggle, setToggle] = useState(false);
  // 수정 핸들러
  const onClickEditHandler = () => {
    // if (edit.title.trim() === "" || edit.content.trim() === "") {
    //   return alert("모든 항목을 입력해주세요.");
    // }
    dispatch(
      updateRooms({
        id,
        title: rooms.title,
        description: rooms.description,
        price: rooms.price,
        address: rooms.address,
        type: rooms.type,
      }),
    );
    setEdit({
      title: '',
      description: '',
      price: '',
      address: '',
      type: '',
    });
    navigate(`/`);
  };
  // delete
  const roomsDelete = () => {
    // eslint-disable-next-line no-use-before-define
    dispatch(deleteRooms(id));
    navigate(`/`);
  };

  // 포스트 고유 값 아이디가 같을때 필터
  const detailData = rooms.filter((obj) => obj.id === id);
  console.log('detailData', detailData[0].content);
  useEffect(() => {
    dispatch(readRooms());
  }, [dispatch]);
  // 수정시 핸들러로 true일때 수정하는 부분 출력
  const editToggleHandler = () => {
    // eslint-disable-next-line no-unused-expressions
    toggle ? setToggle(false) : setToggle(true);
  };
  console.log(edit);

  return (
    <div
      style={{
        maxWidth: '1920px',
        paddingInlineStart: '80px',
        paddingInlineEnd: '80px',
      }}
    >
      <Topbar />
      <STContainer>
        <StImg alt="" src={detailData[0].imageFile} />
        <StBorder>
          <StSpan>{detailData[0].title}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].description}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].price}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].address}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].type}</StSpan>
        </StBorder>
        <StButton onClick={() => roomsDelete(id)}>삭제하기</StButton>
        <StButton onClick={editToggleHandler}>수정하기</StButton>
        {toggle ? (
          <div>
            <StBorder>
              <StInput
                type="text"
                name="title"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    title: event.target.value,
                  });
                }}
                placeholder="제목을 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StInput
                type="text"
                name="description"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    description: event.target.value,
                  });
                }}
                placeholder="내용을 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StInput
                type="text"
                name="price"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    price: event.target.value,
                  });
                }}
                placeholder="내용을 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StInput
                type="text"
                name="address"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    address: event.target.value,
                  });
                }}
                placeholder="내용을 입력해주세요"
              />
            </StBorder>
            <br />
            <StSubmitBtn
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                onClickEditHandler;
              }}
            >
              수정완료
            </StSubmitBtn>
          </div>
        ) : null}
      </STContainer>
    </div>
  );
}

const StImg = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
`;

const STContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  max-width: 1000px;
  max-height: 1000px;
  width: 70%;
  height: 70%;
  text-align: center;
  padding-left: 180px;
  justify-content: 10px;
`;
// 작성하기 버튼
const StButton = styled.button`
  background-color: #fc6868;
  color: white;
  font-weight: 700;
  font-size: 10px;
  width: 50%;
  min-height: 50px;
  margin-bottom: 50px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
`;
const StUploadContainer = styled.div`
  background-color: #ffffff;
  width: 80%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .upload_list_container {
    /* background-color: antiquewhite; */
    height: 300px;
    display: grid;
    padding: 10%;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow: auto;
    div:last-child {
      margin-bottom: 50px;
    }
  }
`;
const StInput = styled.input`
  font-size: 15px;
  font-weight: bold;
  margin: 50px;
  letter-spacing: 0.1px;
  padding: 30px;
  border-radius: 18px;
`;

const StSubmitBtn = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  touch-action: manipulation !important;
  /* font-family: var(--e-ls-qkw) !important; */
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 500 !important;
  border-radius: 8px;
  outline: none !important;
  padding: 14px 24px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
    transform 0.1s ease 0s !important;
  border: none !important;
  background: linear-gradient(
    to right,
    rgb(239, 143, 166) 0%,
    rgb(219, 67, 118) 50%,
    rgb(227, 25, 120) 100%
  ) !important;
  color: rgb(255, 255, 255) !important;
  width: 100% !important;
  margin-bottom: 24px !important;
  margin-top: 16px !important;
`;
const StBorder = styled.div`
  border-bottom: 1px solid gray;
  font-weight: 600;
`;
const StSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin: 50px;
  letter-spacing: 0.1px;
  padding: 30px;
  border-radius: 18px;
`;
