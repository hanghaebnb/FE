import React from 'react';
import styled from 'styled-components';

function RoomType() {
  return <div style={{ marginInlineStart: 'var(0, calc(-1*))', marginInlineEnd: 'var()' }} />;
}

export default RoomType;

const StRoomTypeContainer = styled.div`
  padding-block-start: 20px;
  position: sticky;
  top: calc(80px - var(20px, 0px));
`;

// const StdivOuter = styled.div`
//   margin-inline-start: var(0, calc(-1 * var(0 24px, 32px)));
//   margin-inline-end: var(20px, calc(-1 * var(0 24px, 32px)));
//   padding: var()
// `;
