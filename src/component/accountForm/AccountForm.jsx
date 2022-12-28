import React, { useEffect, useState, useRef } from 'react';
import { TextField, Box, Modal, Typography, IconButton, Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import {
  signUp,
  login,
  clearEmailDuplicate,
  clearNickDuplicate,
  clearDuplicate,
  checkDuplicationEmail,
  checkDuplicationNickname,
} from '../../redux/modules/loginSlice';

function AccountForm({ open, isLogin, handleClose }) {
  const duplicate = useSelector((state) => state.login.duplicate);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const [disable, setDisable] = useState(true);

  const contentInput = useRef();
  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies();
  const [modal, setModal] = useState(false);

  const handler = () => {
    setModal(!modal);
    contentInput.current.value = '';
  };

  const dispatch = useDispatch();

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
    setCheckEmail(false);
    dispatch(clearEmailDuplicate());
  }

  function onNicknameChangeHandler(event) {
    setNickName(event.target.value);
    setCheckNick(false);
    dispatch(clearNickDuplicate());
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onCheckEmail() {
    dispatch(checkDuplicationEmail(email));
  }

  function onCheckNick() {
    dispatch(checkDuplicationNickname(nickname));
  }

  function onSubmitHandler() {
    const account = {
      email,
      nickname,
      password,
    };
    dispatch(signUp(account));
    dispatch(clearDuplicate());
    handleClose();
  }

  function onLoginHandler() {
    const account = {
      email,
      password,
    };
    dispatch(login({ ...account, setCookie }));
    handleClose();
  }
  useEffect(() => {
    setCheckEmail(!duplicate.emailDuplicate);
    setCheckNick(!duplicate.nickDuplicate);
  }, [duplicate.emailDuplicate, duplicate.nickDuplicate]);

  useEffect(() => {
    if (checkEmail && checkNick) setDisable(false);
    else setDisable(true);
  }, [checkEmail, checkNick]);

  const closeEventHandler = () => {
    handler();
  };

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
          <StDivBox>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => onEmailChangeHandler(event)}
            />
          </StDivBox>

          {isLogin ? null : (
            <StDivBox>
              <TextField
                fullWidth
                id="outlined-basic"
                label="닉네임"
                variant="outlined"
                value={nickname}
                onChange={(event) => onNicknameChangeHandler(event)}
              />
            </StDivBox>
          )}
          <StDivBox>
            <TextField
              fullWidth
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
              value={password}
              onChange={(event) => onPasswordChangeHandler(event)}
            />
          </StDivBox>
          <StBtn onClick={isLogin ? () => onLoginHandler() : () => onSubmitHandler()}>계속</StBtn>
          <Grid container columns={9}>
            <Grid item sx={{ marginRight: '57px' }} xs={4} sm={4} md={4}>
              <StBtn onClick={() => onCheckEmail()}>이메일 중복 확인</StBtn>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <StBtn onClick={() => onCheckNick()}>닉네임 중복 확인</StBtn>
            </Grid>
          </Grid>
        </StInner>
      </StBox>
    </Modal>
  );
}
const StCloseIconBtn = styled(IconButton)`
  flex: 0 0 16px !important;
  text-align: left !important;
`;

const StBtn = styled.button`
  cursor: pointer;
  font-family: var(--font-light);
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
  );
  color: rgb(255, 255, 255) !important;
  width: 100% !important;
  margin-bottom: 24px !important;
  margin-top: 16px !important;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StInner = styled(Box)`
  padding: 24px !important;
  flex: 1 1 auto !important;
  overflow-y: auto !important;
  outline: none !important;
`;

const StH3 = styled.h3`
  font-family: var(--font-medium);
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
  font-family: var(--font-medium);
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
const StDivBox = styled.div`
  text-align: center;
  margin-top: 20px;
  justify-content: 10px;
`;

export default AccountForm;
