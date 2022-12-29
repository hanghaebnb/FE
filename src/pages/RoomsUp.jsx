import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { readRoom, updateRooms, deleteRooms } from '../redux/modules/roomSlice';
import Topbar from '../component/main/TopbarRoom';

export default function ShareId(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => state.room);
  const propsParam = useParams();
  const { id } = propsParam;
  // 포스트 고유 값 아이디가 같을때 필터
  const detailData = rooms.filter((obj) => obj.id === id);
  console.log('detailData', detailData.id);
  console.log('detailData', rooms[0].id);
  console.log('detailData', id);
  useEffect(() => {
    dispatch(readRoom(''));
  }, [dispatch]);
  console.log('rooms', rooms);
  return (
    <div
      style={{
        maxWidth: '1920px',
        paddingInlineStart: '80px',
        paddingInlineEnd: '80px',
      }}
    >
      {/* <Topbar />
      <STContainer>
        <StBorder>
          <StSpan>{detailData[0].title}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].description}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].price}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].address}</StSpan>
        </StBorder>

        <br />
        <StBorder>
          <StSpan>{detailData[0].type}</StSpan>
        </StBorder>
      </STContainer> */}
    </div>
  );
}

const STContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  max-width: 1000px;
  max-height: 1000px;
  width: 70%;
  height: 70%;
  text-align: center;
  padding-left: 180px;
  justify-content: 10px;
`;
const StUploadContainer = styled.div`
  background-color: #ffffff;
  width: 80%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .upload_list_container {
    /* background-color: antiquewhite; */
    height: 300px;
    display: grid;
    padding: 10%;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    overflow: auto;
    div:last-child {
      margin-bottom: 50px;
    }
  }
`;
const StSpan = styled.span`
  font-size: 15px;
  font-weight: bold;
  margin: 50px;
  letter-spacing: 0.1px;
  padding: 30px;
  border-radius: 18px;
`;
const StBorder = styled.div`
  border-bottom: 1px solid gray;
  font-weight: 600;
`;
