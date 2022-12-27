import React from 'react';
import styled from 'styled-components';
import LikeIcon from './LikeIcon';

function LikeButton({ onClick, likeCheck }) {
  return (
    <StBtn onClick={() => onClick()}>
      <LikeIcon likeCheck={likeCheck} />
    </StBtn>
  );
}

const StBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border-width: 1px;
  border-style: solid;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  transition: transform 0.25s ease;
  margin: -2px 0 0;
  padding: 2px 0 0 0;
  cursor: pointer;
  text-align: center;
  /* background: lightgrey; */
  outline: none;
  align-items: center;
  color: #222222;
  display: inline-flex;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export default LikeButton;
