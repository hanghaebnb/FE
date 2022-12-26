import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Modal, Typography } from '@mui/material';
import UserIcon from './UserIcon';
import UserMenuIcon from './UserMenuIcon';
import SignUp from '../../signup/SignUp';

function UserInfo() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  return (
    <>
      <StUserInfoDiv>
        <StUserInfoBtn onClick={() => handleOpen()}>
          <UserMenuIcon />
          <UserIcon />
        </StUserInfoBtn>
      </StUserInfoDiv>
      <SignUp open={open} />
    </>
  );
}

const StUserInfoDiv = styled.div`
  display: inline !important;
  position: relative !important;
`;

const StUserInfoBtn = styled.div`
  padding: 5px 5px 5px 12px;
  background: transparent;
  cursor: pointer;
  margin: 0;
  text-align: inherit;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 21px;
  transition: box-shadow 0.2s ease;

  appearance: none;
  /* font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit; */
  overflow: visible;
  text-decoration: none;
  user-select: auto;
  outline: none;
  align-items: center;
  color: #222222;
  display: inline-flex;
  height: 30px;
  position: relative;
  vertical-align: middle;
  z-index: 1;
`;

export default UserInfo;
