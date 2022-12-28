import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Login from '../../login/Login';
import LangIcon from './LangIcon';
import UserInfo from './UserInfo';

function TopbarRight() {
  return (
    <StWrapper>
      <StNav>
        <StLink>
<<<<<<< HEAD
          <StText>당신의 공간을 에어비앤비하세요</StText>
=======
          <StyledLink to="/rooms">
            <StText>당신의 공간을 에어비앤비하세요</StText>
          </StyledLink>
>>>>>>> feature/post
        </StLink>
        <StIconBtn>
          <StIconWrapper>
            <LangIcon />
          </StIconWrapper>
        </StIconBtn>
        <UserInfo />
      </StNav>
    </StWrapper>
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
  font-family: var(--font-medium);
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
  margin-right: 8px;
  text-align: inherit;
  padding: 12px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default TopbarRight;
