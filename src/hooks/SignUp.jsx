import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __userSignUp, __checkPw, __checkName, __checkEmail } from '../../redux/modules/LoginSlice';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.data.data);
  console.log('account', account);
  const [join, setJoin] = useState({
    email: '',
    nickname: '',
    password: '',
  });
  const obj = {
    email: join.email,
    nickname: join.nickname,
    password: join.password,
  };
  const useremailCheck =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const usernicknameCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
  const userpwCheck = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const onCheckEmail = () => {
    console.log('id', obj.email);
    // 수정 필요(true, false로만 받으면 됨. if 필요 없음. dispatch로 받으면 됨)
    dispatch(__checkEmail(obj.email));
  };
  const onCheckname = () => {
    dispatch(__checkName(obj.nickname));
  };
  const password = () => {
    dispatch(__checkName(obj.password));
  };

  useEffect(() => {
    if (__checkEmail !== undefined) {
      if (__checkEmail.success === true) {
        return alert('사용 가능한 email입니다.');
      }
      return alert('이미 사용중인 email이 있습니다.');
    }
  }, [dispatch, __checkEmail]);

  useEffect(() => {
    if (__checkName !== undefined) {
      if (__checkName.success === true) {
        return alert('사용 가능한 닉네임입니다.');
      }
      return alert('이미 사용중인 닉네임이 있습니다.');
    }
  }, [dispatch, __checkName]);

  useEffect(() => {
    if (__checkPw !== undefined) {
      if (__checkPw.success === true) {
        return alert('사용 가능한 password입니다.');
      }
      return alert('이미 사용중인 password가 있습니다.');
    }
  }, [dispatch, __checkPw]);

  useEffect(() => {
    if (account !== undefined) {
      if (account.success === true) {
        alert('회원가입이 완료되었습니다.');
        setJoin({
          email: '',
          nickname: '',
          password: '',
        });
        window.location.replace('/');
      } else if (account.error !== undefined) {
        alert(account.error);
      }
    }
  }, [account]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!useremailCheck.test(obj.email)) {
      return alert('아이디 양식에 맞춰주세요');
    }
    if (!usernicknameCheck.test(obj.nickname)) {
      return alert('닉네임 양식에 맞춰주세요');
    }
    if (!userpwCheck.test(obj.password)) {
      return alert('비밀번호 양식에 맞춰주세요');
    }
    if (obj.email === '' || obj.email === undefined) {
      return alert('빈칸을 입력해주세요.');
    }
    if (obj.nickname === '' || obj.nickname === undefined) {
      return alert('빈칸을 입력해주세요.');
    }
    if (obj.password === '' || obj.password === undefined) {
      return alert('비밀번호를 입력해주세요.');
    }

    dispatch(__userSignUp(obj));
  };
  console.log('obj', obj);
  return (
    <div>
      <div>
        <div>회원가입</div>
        <div className="id">
          <input
            type="text"
            name="email"
            onChange={(event) => {
              setJoin({
                ...join,
                email: event.target.value,
              });
            }}
            placeholder="아이디는 영문자로 시작하는 영문자 또는 숫자 6~20자"
          />
          <button onClick={onCheckEmail} />
        </div>
        <div className="nickname">
          <input
            type="text"
            name="nickname"
            onChange={(event) => {
              setJoin({
                ...join,
                nickname: event.target.value,
              });
            }}
            placeholder="닉네임은 영문자로 시작하는 영문자 또는 숫자 6~20자"
          />
          <button onClick={onCheckname} />
        </div>
        <div className="pw">
          <input
            type="password"
            name="password"
            onChange={(event) => {
              setJoin({
                ...join,
                password: event.target.value,
              });
            }}
            placeholder="비밀번호는 8 ~ 16자 영문, 숫자 조합"
          />
          <button onClick={password} />
        </div>
        <button onClick={onSubmitHandler}>회원가입</button>
        <button
          onClick={() => {
            navigate('/Login');
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
export default SignUp;
