import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __userLogin } from "../../redux/modules/LoginSlice";
// {}로 감싸주기(actions 함수 써야하니까)
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const [login, setLogin] = useState(initialState);
  console.log("로그인", login);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      email: login.email,
      password: login.password,
      navigate: navigate,
    };
    dispatch(__userLogin(obj));
  };
  return (
    <>
      <div>
        <div>
          <div>
            로그인해주세요
          </div>
          <div>
            <div className="idBox">
              <input
                type="text"
                name="email"
                value={login.email}
                placeholder="아이디"
                onChange={onChangeHandler}
              />
            </div>
            <div className="pwBox">
              <input
                type="password"
                name="password"
                value={login.password}
                placeholder="비밀번호"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div>
            <button onClick={onSubmitHandler}>로그인</button>
            <button
              type="submit"
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LogIn;