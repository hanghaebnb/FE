import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AspectRatio } from '@mui/joy';
import { Grid } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import LikeButton from './card/LikeButton';
import { addLike, deleteLike, readRooms } from '../../redux/modules/roomSlice';

const styles = {
  cardcontent: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
};

function RoomCard({ room, locationHandler }) {
  const likeCheck = useSelector(
    (state) => state.room.rooms.filter((v) => v.id === room.id)[0].likeCheck,
  );
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  function like() {
    if (!cookies.accessToken) {
      alert('로그인을 해야 가능합니다.');
      return;
    }
    dispatch(addLike(room.id));
  }
  function disLike() {
    dispatch(deleteLike(room.id));
  }
  return (
    <Card
      sx={{
        cursor: 'pointer',
        border: 'none',
        boxShadow: 'none',
        mb: '16px',
      }}
    >
      <AspectRatio sx={{ mb: '12px' }} ratio="20/19">
        <Link to={`/api/rooms/${room.id}`}>
          <CardMedia
            sx={{ borderRadius: '12px' }}
            component="img"
            image={room.imageList[0]}
            alt="room img"
          />
        </Link>
        <LikeButton onClick={room.likeCheck ? disLike : like} likeCheck={likeCheck} />
      </AspectRatio>
      <StLink to={`/api/rooms/${room.id}`}>
        <AspectRatio sx={{ p: 0 }} ratio="3/1">
          <Grid container spacing={0} direction="row">
            <Grid item xs={12}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1 /* 라인수 */,
                  WebkitBoxOrient: 'vertical',
                  wordWrap: 'break-word',
                  lineHeight: '1.2em',
                  height: '1.2em',
                  fontSize: '15px',
                }}
                variant="body2"
                component="div"
              >
                {room.address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1 /* 라인수 */,
                  WebkitBoxOrient: 'vertical',
                  wordWrap: 'break-word',
                  lineHeight: '1.2em',
                  height: '1.2em',
                  fontSize: '15px',
                }}
                variant="body2"
                color="text.secondary"
              >
                {room.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1 /* 라인수 */,
                  WebkitBoxOrient: 'vertical',
                  wordWrap: 'break-word',
                  lineHeight: '1.2em',
                  height: '1.2em',
                  fontSize: '15px',
                }}
                variant="body2"
                color="text.secondary"
              >
                {room.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1 /* 라인수 */,
                  WebkitBoxOrient: 'vertical',
                  wordWrap: 'break-word',
                  lineHeight: '1.2em',
                  height: '1.2em',
                  fontSize: '15px',
                }}
                variant="body2"
                color="text.secondary"
              >
                {`₩${room.price} /박`}
              </Typography>
            </Grid>
          </Grid>
        </AspectRatio>
      </StLink>
    </Card>
  );
}

const StLink = styled(Typography)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #222222;
    text-decoration: none;
  }
`;

// const StGrid = styled.div`
//   font-size: 15px;
//   line-height: 19px;
//   display: grid;
//   gap: 2px;
//   grid-template-columns: 2px;
// `;

// const StAdress = styled.div`
//   overflow: clip;
//   line-height: inherit;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   color: #222222;
//   font-weight: 600;
// `;

export default withStyles(styles, { withTheme: true })(RoomCard);
