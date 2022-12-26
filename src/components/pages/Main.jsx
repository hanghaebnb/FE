import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { __getPosts } from "../../redux/modules/PostsSlice";
// import ModalLogIn from "../components/modals/ModalLogIn";
// import ModalSignUp from "../components/modals/ModalSignUp";
import styled from 'styled-components';
// import { postComm, getComm, setComm } from "../../redux/modules/postSlice";
// import { BsListCheck } from 'react-icons/bs';
import useModal from '../../hooks/UseModal';

export default function Main({ setCategoryName }) {
  const contentInput = useRef();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [modalLogIn, onChangeLogInHandler] = useModal();
  const [modaSignUp, onChangeSignUpHandler] = useModal();
  const [isTrue, setIsTrue] = useState(false);
  const comm = useSelector((state) => state.post.comm);

  // 모달창 x 버튼 눌렀을 때
  const closeEventLogInHandler = () => {
    onChangeLogInHandler();
  };
  const closeEventSignUpHandler = () => {
    onChangeSignUpHandler();
  };
  // 모달창에서 추가하기 버튼 눌렀을 때, 서버에 input text 저장
  // const onSubmitLogInHandler = () => {
  //   dispatch(postComm({ isClicked: false }));
  //   setIsTrue(!isTrue);
  //   return onChangeLogInHandler();
  // };
  // const onSubmitSignUpHandler = () => {
  //   dispatch(postComm({ isClicked: false }));
  //   setIsTrue(!isTrue);
  //   return onChangeSignUpHandler();
  // };

  // useEffect(() => {
  //   dispatch(__getPosts());
  // }, [dispatch]);
  // 카테고리 리스트 관련
  // const onClickHandler = (id) => {
  //   const list = comm.map((item) => {
  //     if (item.id === id) {
  //       setCategoryName(item.name);
  //       return {
  //         ...item,
  //         isClicked: true,
  //       };
  //     }
  //     return {
  //       ...item,
  //       isClicked: false,
  //     };
  //   });
  //   dispatch(setComm(list));

  /*   */

  return (
    <>
      <div>메인 페이지</div>
      {/* <ModalLogIn
        close={closeEventLogInHandler}
        submit={onSubmitLogInHandler}
        header="리스트 추가하기"
        button="추가하기"
      />
      <ModalSignUp
        close={closeEventSignUpHandler}
        submit={onSubmitSignUpHandler}
        header="리스트 추가하기"
        button="추가하기"
      /> */}
      {/* <button onClick={onChangeLogInHandler}>로그인</button> */}
      {/* <button onClick={onChangeSignUpHandler}>회원가입</button> */}
      <StCategory>
        <span className="category_title">
          {/* <BsListCheck style={{ width: '20px', height: '20px' }} /> */}
          <StCategoryTitle>커뮤니티 리스트</StCategoryTitle>
        </span>

        <StCategoryInner>
          {/* {comm &&
            comm.map((item) => {
              return (
                <button
                  type="button"
                  key={item.id}
                  className={
                    item.isClicked ? "category_list clicked" : "category_list "
                  }
                  onClick={() => onClickHandler(item.id)}
                >
                  {item.name}
                </button>
              );
            })} */}
        </StCategoryInner>
      </StCategory>
    </>
  );
}

const StCategoryTitle = styled.span`
  margin-top: 3px;
`;
const StCategoryInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 0 30px;
  .category_list {
    font-size: 0.9rem;
    cursor: pointer;
    width: fit-content;
    background: none;
    border: none;
  }
  .clicked {
    color: #eceaea;
    text-shadow: 0 0 6px #e6618f, 0 0 18px #e6618f;
  }
`;
const StCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin-top: 30px;
  .category_title {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
`;
