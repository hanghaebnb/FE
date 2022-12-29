import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './topbar/Logo';
import Search from './topbar/Search';
import TopbarRight from './topbar/TopbarRight';

function Topbar() {
  return (
    <StHeader>
      <StWrapper>
        <StLogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </StLogoWrapper>
        <StSearchWrapper>
          <Search />
        </StSearchWrapper>
        <TopbarRight />
      </StWrapper>
    </StHeader>
  );
}

const StHeader = styled.header`
  height: 80px;
  width: 100%;
  z-index: 100;
  --header_brand-color: #ff385c;
  position: relative;
  /* max-width: 1760px; */
  border-bottom: 1px solid #ebebeb;
`;

const StWrapper = styled.div`
  /* padding-inline-start: 80px; */
  padding-inline-end: 80px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const StLogoWrapper = styled.div`
  flex: 1 0 140px;
`;

const StSearchWrapper = styled.div`
  text-align: center;
  padding: 0 24px;
  flex: 0 1 auto;
  min-width: 348px;
`;

export default Topbar;
