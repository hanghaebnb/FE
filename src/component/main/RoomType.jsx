import React from 'react';
import styled from 'styled-components';

function RoomType() {
  return (
    <StRoomTypeContainer>
      <StBtn>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            style={{ width: '24px', height: '24px', marginBottom: '8px' }}
            src="img/house.png"
            alt="house.png"
          />
          <StSpan>주택</StSpan>
        </div>
      </StBtn>
      <StBtn>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            style={{ width: '24px', height: '24px', marginBottom: '8px' }}
            src="img/apart.png"
            alt="apart.png"
          />
          <StSpan>아파트</StSpan>
        </div>
      </StBtn>
      <StBtn>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            style={{ width: '24px', height: '24px', marginBottom: '8px' }}
            src="img/hotel.png"
            alt="hotel.png"
          />
          <StSpan>호텔</StSpan>
        </div>
      </StBtn>
    </StRoomTypeContainer>
  );
}

export default RoomType;

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
