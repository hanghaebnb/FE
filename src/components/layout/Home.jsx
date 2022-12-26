import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../pages/Main';

export default function Home() {
  /* 
    1. useState를 만든다. ok
    2. props로 전달한다. ok
    3. sidebar에서 최신화가 된다. state값 = 카테고리 value 최신화  ok
    4. home 컴포넌트가 리렌더링이 된다. ok
    5. main에 state값이 최신화되어 넘어간다. ok
    6. main에서 state값으로 lists의 값과 비교하여 동일한 값을 화면에 뿌려준다.
  */
  const [categoryName, setCategoryName] = useState('');

  return (
    <StWrapper>
      <Main categoryName={categoryName} setCategoryName={setCategoryName} />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
