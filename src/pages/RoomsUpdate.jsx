import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { readRoom, updateRooms, deleteRooms } from '../redux/modules/roomSlice';
import Topbar from '../component/main/TopbarRoom';
import ImageUpload from '../component/post/ImageFile/ImageUpload';

export default function ShareId(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookies] = useCookies(['accessToken']);
  const rooms = useSelector((state) => state.room.rooms);
  console.log('posts', rooms); // id 지정
  const propsParam = useParams();
  const { id } = propsParam;
  const roomid = Number(id);
  // 포스트 고유 값 아이디가 같을때 필터
  const detailData = rooms.filter((obj) => obj.id === roomid);
  const selectList = ['카테고리를 선택해주세요', 'house', 'Apartment', 'hotel'];
  // 수정하기
  const [edit, setEdit] = useState({
    title: '',
    description: '',
    price: 0,
    address: '',
    type: '',
  });
  // 이미지 관련
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    console.log(imageFile);
  }, [imageFile]);
  // 수정 토글 관련 use
  const [toggle, setToggle] = useState(false);
  // 수정 핸들러
  const onClickEditHandler = () => {
    // if (
    //   rooms.title.trim() === '' ||
    //   rooms.description.trim() === '' ||
    //   rooms.price.trim() === '' ||
    //   rooms.address.trim() === ''
    // ) {
    //   return alert('모든 항목을 입력해주세요.');
    // }
    dispatch(
      updateRooms({
        room: {
          id: roomid,
          title: edit.title,
          description: edit.description,
          price: edit.price * 1,
          address: edit.address,
          type: edit.type,
        },
        imageFile,
      }),
    );
    setEdit({
      title: '',
      description: '',
      price: 0,
      address: '',
      type: '',
    });
    // navigate(`/`);
  };
  // delete
  const roomsDelete = () => {
    dispatch(deleteRooms(roomid));
    navigate(`/`);
  };

  useEffect(() => {
    dispatch(readRoom());
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
      {/* <Topbar /> */}
      <STContainer>
        <StImg alt="image" src={detailData[0].imageList} />
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
        <StButton onClick={() => roomsDelete(roomid)}>삭제하기</StButton>
        <StButton
          onClick={() => {
            editToggleHandler();
          }}
        >
          수정하기
        </StButton>
        {toggle ? (
          <div>
            <StBorder>
              <ImageUpload setImageFile={setImageFile} />
            </StBorder>
            <StBorder>
              <StSpanBar>업 체</StSpanBar>
              <StInput
                type="text"
                name="title"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    title: event.target.value,
                  });
                }}
                placeholder="업체이름을 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StSpanBar>내 용</StSpanBar>
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
              <StSpanBar>가 격</StSpanBar>
              <StInput
                type="text"
                name="price"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    price: event.target.value,
                  });
                }}
                placeholder="가격을 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StSpanBar>주 소</StSpanBar>
              <StInput
                type="text"
                name="address"
                onChange={(event) => {
                  setEdit({
                    ...edit,
                    address: event.target.value,
                  });
                }}
                placeholder="주소를 입력해주세요"
              />
            </StBorder>
            <br />
            <StBorder>
              <StSpanBar>타 입</StSpanBar>
              <StSelect
                type=""
                value={rooms.type}
                onChange={(e) => {
                  setEdit({ ...edit, type: e.target.value });
                  console.log(e.target.value);
                }}
              >
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </StSelect>
            </StBorder>
            <br />
            <StSubmitBtn
              type="button"
              onClick={() => {
                onClickEditHandler();
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
  width: 60%;
  height: 60%;
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
  background: linear-gradient(
    to right,
    rgb(225, 12, 62) 0%,
    rgb(216, 69, 118) 50%,
    rgb(236, 119, 173) 100%
  ) !important;
  color: rgb(255, 255, 255) !important;
  margin-bottom: 24px !important;
  margin-top: 16px !important;
  margin-left: 16px !important;
  width: 40% !important;
  color: white;
  font-weight: 700;
  font-size: 13px;
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
  font-size: 18px;
  font-weight: bold;
  margin: 50px;
  letter-spacing: 0.1px;
  padding: 30px;
  border-radius: 18px;
`;
const StSelect = styled.select`
  font-size: 16px;
  font-weight: bold;
  margin: 50px;
  letter-spacing: 0.1px;
  padding: 30px;
  border-radius: 18px;
`;
const StSpanBar = styled.span`
  font-size: 17px;
`;
