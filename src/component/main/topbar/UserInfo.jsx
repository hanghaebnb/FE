import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import { useCookies } from 'react-cookie';
import UserIcon from './UserIcon';
import UserMenuIcon from './UserMenuIcon';
import SignUp from '../../signup/SignUp';
import Login from '../../login/Login';

function UserInfo() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cookies, setCookie, removeCookies] = useCookies(['accessToken']);
  const open = Boolean(anchorEl);

  function handleSignUpOpen() {
    setSignUpOpen(true);
    setAnchorEl(null);
  }
  function handleSignUpClose() {
    setSignUpOpen(false);
  }
  function handleLoginOpen() {
    setLoginOpen(true);
    setAnchorEl(null);
  }
  function handleLoginClose() {
    setLoginOpen(false);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    removeCookies('accessToken');
  }
  return (
    <>
      <StUserInfoDiv>
        <StUserInfoBtn
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={(event) => handleClick(event)}
        >
          <UserMenuIcon />
          <UserIcon />
        </StUserInfoBtn>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={cookies.accessToken ? logout : handleLoginOpen}>
            {cookies.accessToken ? '로그아웃' : '로그인'}
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleSignUpOpen()}>회원가입</MenuItem>
        </Menu>
      </StUserInfoDiv>
      <SignUp open={signUpOpen} handleClose={() => handleSignUpClose()} />
      <Login open={loginOpen} handleClose={() => handleLoginClose()} />
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
