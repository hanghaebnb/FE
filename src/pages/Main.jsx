import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RoomCard from '../component/main/RoomCard';
import Topbar from '../component/main/Topbar';
import { readRooms } from '../redux/modules/roomSlice';

function Main() {
  const rooms = useSelector((state) => state.room.rooms);
  const dispatch = useDispatch();

  function getHomes() {
    dispatch(readRooms('type=home'));
  }

  function getApart() {
    dispatch(readRooms('type=apart'));
  }

  function getHotel() {
    dispatch(readRooms('type=hotel'));
  }

  return (
    <div
      style={{
        maxWidth: '1920px',
        paddingInlineStart: '80px',
        paddingInlineEnd: '80px',
      }}
    >
      <Topbar />
      <Button sx={{ mr: 2, mb: 2 }} variant="outlined" onClick={() => getHomes()}>
        주택
      </Button>
      <Button sx={{ mr: 2, mb: 2 }} variant="outlined" onClick={() => getApart()}>
        아파트
      </Button>
      <Button sx={{ mb: 2 }} variant="outlined">
        호텔
      </Button>
      <Container disableGutters maxWidth="xl">
        <Grid
          container
          spacing={3}
          columns={60}
          direction="row"
          // justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid>
          {/* <Grid item xs={30} sm={20} md={15} lg={12} xl={10}>
            <RoomCard />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

const StBtn = styled(Button)`
  margin-right: 20px;
  margin-bottom: 20px;
`;

export default Main;
