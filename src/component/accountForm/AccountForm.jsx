import React, { useState } from 'react';
import { TextField, Box, Modal, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { signUp, login } from '../../redux/modules/loginSlice';

function AccountForm({ open, isLogin, handleClose }) {
  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function onNicknameChangeHandler(event) {
    setNickName(event.target.value);
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler() {
    const account = {
      email,
      nickname,
      password,
    };
    dispatch(signUp(account));
  }

  function onLoginHandler() {
    const account = {
      email,
      password,
    };
    dispatch(login({ ...account, setCookie }));
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StBox>
        <StHeader>
          <StCloseIconBtn
            sx={{ minHeight: 0, minWidth: 0, padding: 0, color: '#222222' }}
            size="small"
            onClick={() => handleClose()}
          >
            <CloseIcon style={{ fontSize: 20 }} />
          </StCloseIconBtn>
          {isLogin ? '로그인' : '회원가입'}
          <StDiv />
        </StHeader>
        <StInner>
          <StH3>에어비앤비에 오신 것을 환영합니다.</StH3>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => onEmailChangeHandler(event)}
          />
          {isLogin ? null : (
            <TextField
              fullWidth
              id="outlined-basic"
              label="닉네임"
              variant="outlined"
              value={nickname}
              onChange={(event) => onNicknameChangeHandler(event)}
            />
          )}
          <TextField
            fullWidth
            id="outlined-basic"
            label="비밀번호"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => onPasswordChangeHandler(event)}
          />
          <StSubmitBtn onClick={isLogin ? () => onLoginHandler() : () => onSubmitHandler()}>
            계속
          </StSubmitBtn>
        </StInner>
      </StBox>
    </Modal>
  );
}
const StCloseIconBtn = styled(IconButton)`
  flex: 0 0 16px !important;
  text-align: left !important;
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
  font-weight: 600 !important;
  border-radius: 8px;
  outline: none !important;
  padding: 14px 24px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
    transform 0.1s ease 0s !important;
  border: none !important;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  ) !important;
  color: rgb(255, 255, 255) !important;
  width: 100% !important;
  margin-bottom: 24px !important;
  margin-top: 16px !important;
`;

const StInner = styled(Box)`
  padding: 24px !important;
  flex: 1 1 auto !important;
  overflow-y: auto !important;
  outline: none !important;
`;

const StH3 = styled.h3`
  font-size: 22px !important;
  line-height: 26px !important;
  color: rgb(34, 34, 34) !important;
  font-weight: 600 !important;
  margin-top: 8px !important;
  margin-bottom: 24px !important;
`;

const StDiv = styled.div`
  flex: 0 0 16px !important;
  text-align: right !important;
`;

const StHeader = styled.header`
  height: 64px !important;
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0px 24px !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
`;

const StBox = styled(Box)`
  outline: none;
  width: 100% !important;
  max-width: 568px !important;
  height: 100%;
  max-height: 682px !important;
  border-radius: 12px !important;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export default AccountForm;
