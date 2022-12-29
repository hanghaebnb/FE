import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Container, Divider, Grid, List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useCookies } from 'react-cookie';
import { useInView } from 'react-intersection-observer';
import {
  increasePage,
  initPage,
  initRooms,
  nonMemberReadRooms,
  readRooms,
} from '../redux/modules/roomSlice';
import Topbar from '../component/main/Topbar';
import RoomCard from '../component/main/RoomCard';
import RoomType from '../component/main/RoomType';

const BREAKPOINTS = {
  xxs: 0,
  xs: 480,
  sm: 855,
  md: 1032,
  lg: 1465,
  xl: 1700,
};

const breakpointsFull = createBreakpoints({
  values: { ...BREAKPOINTS },
  keys: Object.keys(BREAKPOINTS),
});

const myTheme = { other: 'stuff' };

const theme = createTheme({
  default: myTheme,
  breakpoints: breakpointsFull,
});

function Main() {
  const [cookies, setCookie, removeCookies] = useCookies(['accessToken']);
  const rooms = useSelector((state) => state.room.rooms);
  const page = useSelector((state) => state.room.page);
  const [loading, setLoading] = useState(false);
  const roomType = useRef('');

  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  function getHomes() {
    roomType.current = '&type=house';
    dispatch(initRooms());
    dispatch(initPage());
  }

  function getApart() {
    roomType.current = '&type=apartment';
    dispatch(initRooms());
    dispatch(initPage());
  }

  function getHotel() {
    roomType.current = '&type=hotel';
    dispatch(initRooms());
    dispatch(initPage());
  }

  // 무한스크롤
  const getItems = useCallback(() => {
    setLoading(true);
    if (cookies.accessToken) dispatch(readRooms(`?page=${page}&size=10${roomType.current}`));
    else dispatch(nonMemberReadRooms(`?page=${page}&size=10${roomType.current}`));
    setLoading(false);
  }, [dispatch, page]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      dispatch(increasePage(page));
    }
  }, [inView, loading]);

  return (
    <div
      style={{
        maxWidth: '1920px',
      }}
    >
      <Topbar />
      <RoomType
        getHomes={() => getHomes()}
        getApart={() => getApart()}
        getHotel={() => getHotel()}
      />
      <Container
        maxWidth="100%"
        sx={{ mr: 0, ml: 0, paddingInlineStart: '80px', paddingInlineEnd: '80px' }}
        disableGutters
      >
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={3} columns={60} direction="row" alignItems="center">
            {rooms.map((room, idx) => (
              <React.Fragment key={room.id}>
                {rooms.length - 1 === idx ? (
                  <Grid
                    item
                    key={room.id}
                    xxs={60}
                    xs={30}
                    sm={20}
                    md={15}
                    lg={12}
                    xl={10}
                    ref={ref}
                  >
                    <RoomCard room={room} />
                  </Grid>
                ) : (
                  <Grid item key={room.id} xxs={60} xs={30} sm={20} md={15} lg={12} xl={10}>
                    <RoomCard room={room} />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </MuiThemeProvider>
      </Container>
    </div>
  );
}

const StBtn = styled(Button)`
  margin-right: 20px;
  margin-bottom: 20px;
`;

export default Main;
