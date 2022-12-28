import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import HeartImg from './image/fullheart.png';
import EmptyHeartImg from './image/heart.png';

const Heart = styled.img`
    // css
    }
`;

function HeartButton({ like, onClick }) {
  return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
}

export default HeartButton;
