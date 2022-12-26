import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../../login/Login';
import LangIcon from './LangIcon';
import UserInfo from './UserInfo';

function TopbarRight() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  return (
    <>
      <StWrapper>
        <StNav>
          <StLink>
            <StText>당신의 공간을 에어비앤비하세요</StText>
          </StLink>
          <StIconBtn onClick={() => handleOpen()}>
            <StIconWrapper>
              <LangIcon />
            </StIconWrapper>
          </StIconBtn>
          <UserInfo />
        </StNav>
      </StWrapper>
      <Login open={open} />
    </>
  );
}

const StWrapper = styled.div`
  flex: 1 0 140px;
`;

const StNav = styled.nav`
  -webkit-box-pack: end !important;
  -webkit-box-align: center !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  height: 80px !important;
`;

const StLink = styled.div`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0;
  text-align: inherit;
  padding: 12px;
  transition: color 250ms;

  appearance: none;
  /* color: inherit; */
  display: inline-block;
  /* font-family: inherit; */
  overflow: visible;
  text-decoration: none;
  user-select: auto;
  outline: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  z-index: 1;
`;

const StText = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const StIconWrapper = styled.div`
  -webkit-box-align: center !important;
  align-items: center !important;
  display: flex !important;
  height: 18px !important;
  position: relative !important;
  z-index: 1 !important;
`;

const StIconBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin: 0;
  text-align: inherit;
  padding: 12px;
`;

export default TopbarRight;
