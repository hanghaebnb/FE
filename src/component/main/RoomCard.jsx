import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function RoomCard() {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <CardMedia
        sx={{ borderRadius: '8px' }}
        component="img"
        image="/img/room.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          속초시, 한국
        </Typography>
        <Typography variant="body2" color="text.secondary">
          속초해수욕장
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1월 1일~6일
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1월 1일~6일
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RoomCard;
