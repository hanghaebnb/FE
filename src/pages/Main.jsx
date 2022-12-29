import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Container, Grid, List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { useCookies } from 'react-cookie';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { nonMemberReadRooms, readRooms } from '../redux/modules/roomSlice';
import Topbar from '../component/main/Topbar';
import RoomCard from '../component/main/RoomCard';

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
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  const locationHandler = (id) => {
    navigate(`/api/rooms/${id}`);
    console.log(id);
  };

  function getHomes() {
    dispatch(readRooms('?type=house'));
  }

  function getApart() {
    dispatch(readRooms('?type=apartment'));
  }

  function getHotel() {
    dispatch(readRooms('?type=hotel'));
  }

  function getNonMemberHomes() {
    dispatch(nonMemberReadRooms('?type=house'));
  }

  function getNonMemberApart() {
    dispatch(nonMemberReadRooms('?type=apartment'));
  }

  function getNonMemberHotel() {
    dispatch(nonMemberReadRooms('?type=hotel'));
  }
  // 무한스크롤
  const getItems = useCallback(() => {
    setLoading(true);
    if (cookies.accessToken) dispatch(readRooms(`?page=${page}&size=10`));
    else dispatch(nonMemberReadRooms(`?page=${page}&size=10`));
    setLoading(false);
  }, [dispatch, cookies, page]);
  useEffect(() => {
    getItems();
  }, [getItems]);
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <div
      style={{
        maxWidth: '1920px',
      }}
    >
      <Topbar />
      <Button
        sx={{ mr: 2, mb: 2 }}
        variant="outlined"
        onClick={cookies.accessToken ? () => getHomes() : () => getNonMemberHomes()}
      >
        주택
      </Button>
      <Button
        sx={{ mr: 2, mb: 2 }}
        variant="outlined"
        onClick={cookies.accessToken ? () => getApart() : () => getNonMemberApart()}
      >
        아파트
      </Button>
      <Button
        sx={{ mb: 2 }}
        variant="outlined"
        onClick={cookies.accessToken ? () => getHotel() : () => getNonMemberHotel()}
      >
        호텔
      </Button>
      <Container
        maxWidth="100%"
        sx={{ mr: 0, ml: 0, paddingInlineStart: '80px', paddingInlineEnd: '80px' }}
        disableGutters
      >
        <MuiThemeProvider theme={theme}>
          <Grid
            container
            spacing={3}
            columns={60}
            direction="row"
            // justifyContent="center"
            alignItems="center"
          >
            {rooms.map((room, idx) => (
              <React.Fragment key={room.id}>
                {rooms.length - 1 === idx ? (
                  // <div className="room-item" ref={ref} key={room.id}>
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
                    {/* <Grid key={room.id} item one={60} two={30} three={20} four={15} five={12} six={10}> */}
                    <RoomCard room={room} locationHandler={locationHandler} />
                  </Grid>
                ) : (
                  // </div>
                  // <div className="room-item" key={room.id}>
                  <Grid item key={room.id} xxs={60} xs={30} sm={20} md={15} lg={12} xl={10}>
                    {/* <Grid key={room.id} item one={60} two={30} three={20} four={15} five={12} six={10}> */}
                    <RoomCard room={room} locationHandler={locationHandler} />
                  </Grid>
                  // </div>
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
