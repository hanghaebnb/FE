import React, { useState } from 'react';
import styled from 'styled-components';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';
import FilterIcon from './roomtype/FilterIcon';
import Filter from './roomtype/Filter';

function RoomType({ getHomes, getApart, getHotel, query, clear }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <StRoomTypeContainer>
        <StBtn onClick={() => clear()}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <RefreshIcon sx={{ width: '24px', height: '24px', marginBottom: '8px' }} />
            <StSpan>초기화</StSpan>
          </div>
        </StBtn>
        <StBtn onClick={() => getHomes()}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/house.png"
              alt="house.png"
            />
            <StSpan>주택</StSpan>
          </div>
        </StBtn>
        <StBtn onClick={() => getApart()}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/apart.png"
              alt="apart.png"
            />
            <StSpan>아파트</StSpan>
          </div>
        </StBtn>
        <StBtn onClick={() => getHotel()}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/hotel.png"
              alt="hotel.png"
            />
            <StSpan>호텔</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/hanok.png"
              alt="hanok.png"
            />
            <StSpan>한옥</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/ryokan.png"
              alt="ryokan.png"
            />
            <StSpan>료칸</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/ufo.png"
              alt="ufo.png"
            />
            <StSpan>우주선</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/camping.png"
              alt="camping.png"
            />
            <StSpan>캠핑장</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/container.png"
              alt="container.png"
            />
            <StSpan>컨테이너</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/castle.png"
              alt="castle.png"
            />
            <StSpan>성</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/national_park.png"
              alt="national_park.png"
            />
            <StSpan>국립공원</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/farm.png"
              alt="farm.png"
            />
            <StSpan>농장</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/desert.png"
              alt="desert.png"
            />
            <StSpan>사막</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/cave.png"
              alt="cave.png"
            />
            <StSpan>동굴</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/island.png"
              alt="island.png"
            />
            <StSpan>섬</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/north_pole.png"
              alt="north_pole.png"
            />
            <StSpan>북극</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/camping.png"
              alt="camping.png"
            />
            <StSpan>캠핑장</StSpan>
          </div>
        </StBtn>
        <StBtn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              style={{ width: '24px', height: '24px', marginBottom: '8px' }}
              src="img/tree_house.png"
              alt="tree_house.png"
            />
            <StSpan>나무 위</StSpan>
          </div>
        </StBtn>
        <StFilterDiv>
          <StFilterBtn onClick={() => handleOpen()}>
            <StFilterSpan>
              <FilterIcon />
              <StFilterText>필터</StFilterText>
            </StFilterSpan>
          </StFilterBtn>
        </StFilterDiv>
      </StRoomTypeContainer>
      <Filter open={open} handleClose={() => handleClose()} query={query} />
    </>
  );
}

export default RoomType;

const StFilterSpan = styled.span`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2px;
  display: grid;
  justify-items: center;
  grid-auto-flow: column;
  gap: 8px;
`;

const StFilterText = styled.span`
  transform: translateY(-1px);
  display: block;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  font-family: var(--font-regular);
`;

const StFilterDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translate(0%, -50%);
`;
const StFilterBtn = styled.button`
  border: 1px solid #dddddd;
  background-color: transparent;
  cursor: pointer;
  border-radius: 12px;
  margin: 0;
  padding: 7px 0;

  touch-action: manipulation;
  min-width: 48px;
  height: 48px;
  color: #222222;
`;
const StRoomTypeContainer = styled.div`
  z-index: 10;
  padding-inline-start: 80px;
  padding-inline-end: 80px;
  position: sticky;
  top: 80px;
  height: 78px;
  background-color: #ffffff;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 30px;
  overflow: hidden;
`;

const StBtn = styled.button`
  width: 60px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  background-color: unset;
  border: unset;
  padding: 4px 0 14px;
  margin: 12px 0 0;
  margin-right: 32px;
  transition: box-shadow 0.2s ease, color 0.2s ease;
`;

const StSpan = styled.span`
  font-family: var(--font-medium);
  font-size: 15px;
`;

// const StdivOuter = styled.div`
//   margin-inline-start: var(0, calc(-1 * var(0 24px, 32px)));
//   margin-inline-end: var(20px, calc(-1 * var(0 24px, 32px)));
//   padding: var()
// `;
