import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
// import LogIn from "../../hooks/Login";

export default function Modal(props) {
  const { modal, close, submit, header, button } = props;

  return (
    <StModalContainer className={modal ? "modal open" : "modal"}>
      <div className="modal_inner">
        <div className="modal_header">
          <span>{header}</span>
          {/* <LogIn /> */}
          <StClose className="modal_close_btn" onClick={close} />
        </div>
        <StContent>
          <div className="modal_content_inner">{props.children}</div>
          <div className="modal_footer">
            <StButton type="button" onClick={submit}>
              {button}
            </StButton>
          </div>
        </StContent>
      </div>
    </StModalContainer>
  );
}

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  display: none;
  width: 100%;
  min-height: 100vh;
  &.open {
    display: block;
  }
  .modal_inner {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 3;
    max-width: 500px;
    transform: translate(-50%, -100%);
    animation: open ease-in-out 0.3s forwards;
    width: 95%;
  }
  .modal_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
  }
  .modal_footer {
    display: flex;
    justify-content: flex-end;
  }
  @keyframes open {
    0% {
      opacity: 0;
      margin-top: -50px;
    }
    100% {
      opacity: 1;
    }
  }
`;
const StClose = styled(IoIosClose)`
  font-size: 2rem;
  cursor: pointer;
`;
const StContent = styled.div`
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin-top: 30px;
  .modal_content_inner {
    display: flex;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }
`;

const StButton = styled.button`
  background: none;
  border: none;
  min-width: 85px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #f4f3f3;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 10%);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
