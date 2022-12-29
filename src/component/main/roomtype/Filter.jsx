import { Box, Modal, TextField, Typography, IconButton, Grid, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { initPage, initRooms } from '../../../redux/modules/roomSlice';

function Filter({ open, handleClose, query }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [keyWord, setKeyWord] = useState('');

  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();

  const numCheck = /^[0-9]+$/;

  function onMinPriceChangeHandler(event) {
    if (event.target.value === '') setMinPrice(0);
    if (!numCheck.test(event.target.value)) setMinPrice((current) => current);
    else setMinPrice(event.target.value * 1);
  }

  function onMaxPriceChangeHandler(event) {
    if (event.target.value === '') setMaxPrice(0);
    if (!numCheck.test(event.target.value)) setMaxPrice((current) => current);
    else setMaxPrice(event.target.value * 1);
  }

  function onKeyWordChangeHandler(event) {
    setKeyWord(event.target.value);
  }

  useEffect(() => {
    if (minPrice > maxPrice) setDisable(true);
    else setDisable(false);
  }, [minPrice, maxPrice]);

  function searchPrice() {
    query.current = `&minPrice=${minPrice}&maxPrice=${maxPrice}&keyword=${keyWord}`;
    dispatch(initRooms());
    dispatch(initPage());
    setMinPrice(0);
    setMaxPrice(0);
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StBox>
        <StHeader>
          <StCloseIconBtn
            sx={{ minHeight: 0, minWidth: 0, padding: 0, color: '#222222' }}
            size="small"
            onClick={() => handleClose()}
          >
            <CloseIcon style={{ fontSize: 20 }} />
          </StCloseIconBtn>
          필터
          <StDiv />
        </StHeader>
        <StPrice>
          <StH2>가격 범위</StH2>
          <Grid sx={{ pt: '18px', textAlign: 'center' }} container columns={30}>
            <Grid item xs={14} sm={14} md={14}>
              <TextField
                InputProps={{
                  startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                }}
                value={minPrice}
                onChange={(event) => onMinPriceChangeHandler(event)}
                label="최소 가격"
                variant="outlined"
              />
            </Grid>
            <StSpan>-</StSpan>
            <Grid item xs={14} sm={14} md={14}>
              <TextField
                InputProps={{
                  startAdornment: <InputAdornment position="start">₩</InputAdornment>,
                }}
                value={maxPrice}
                onChange={(event) => onMaxPriceChangeHandler(event)}
                label="최대 가격"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <div style={{ paddingTop: '18px' }}>
            <TextField
              sx={{ width: '100%' }}
              value={keyWord}
              onChange={(event) => onKeyWordChangeHandler(event)}
              label="검색"
              variant="outlined"
            />
          </div>
        </StPrice>
        <StSubmitBtn onClick={() => searchPrice()} disabled={disable}>
          검색
        </StSubmitBtn>
      </StBox>
    </Modal>
  );
}
const StSubmitBtn = styled.button`
  cursor: pointer;
  display: inline-block !important;
  margin: 0px !important;
  position: absolute !important;
  right: 24px;
  bottom: 24px;
  text-align: center !important;
  text-decoration: none !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-family: var(--font-regular) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 14px 24px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
    transform 0.1s ease 0s !important;
  -webkit-tap-highlight-color: transparent !important;
  border: none !important;
  background: #222222 !important;
  color: #ffffff !important;
  contain: paint !important;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StSpan = styled.span`
  margin: auto;
`;

const StH2 = styled.h2`
  font-family: var(--font-medium);
  font-size: 22px !important;
  line-height: 26px !important;
  color: rgb(34, 34, 34) !important;
  font-weight: 600 !important;
  padding-bottom: 0px !important;
`;

const StPrice = styled.div`
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
`;

const StBox = styled(Box)`
  outline: none;
  width: 100% !important;
  max-width: 568px !important;
  height: 100%;
  max-height: 682px !important;
  border-radius: 12px !important;
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StDiv = styled.div`
  flex: 0 0 16px !important;
  text-align: right !important;
`;

const StHeader = styled.header`
  font-family: var(--font-medium);
  height: 64px !important;
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0px 24px !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
`;

const StCloseIconBtn = styled(IconButton)`
  flex: 0 0 16px !important;
  text-align: left !important;
`;

export default Filter;
