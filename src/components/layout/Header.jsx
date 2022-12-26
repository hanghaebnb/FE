import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function Header() {
  // const navigate = useNavigate();

  // const onClickCreateHandler = () => {
  //   navigate('/create');
  // };

  // const onLoginOutHandler = () => {
  //   alert('로그아웃 되었습니다.');
  //   navigate('/');
  //   localStorage.clear();
  // };

  return (
    <StHeader>
      <StIconWrap>
        {/* <Link to='/main'>
          <img alt='logo' src={} width='40px' />
        </Link> */}
        <StLogo>감자마-켓</StLogo>
      </StIconWrap>
      <StButtonWrap>
        <StHeaderButton
        // onClick={onClickCreateHandler}
        >
          <StWriteSpan>작성하기</StWriteSpan>
        </StHeaderButton>
        <StHeaderButton
        // onClick={onLoginOutHandler}
        >
          로그아웃
        </StHeaderButton>
      </StButtonWrap>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: white;
  height: 50px;
`;
const StIconWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StLogo = styled.span`
  margin: 0 8px;
  font-size: 14px;
`;
const StButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;
// 글자만 있는 버튼
const StHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  font-size: 14px;
  cursor: pointer;
`;
const StWriteSpan = styled.span`
  margin-right: 4px;
`;
