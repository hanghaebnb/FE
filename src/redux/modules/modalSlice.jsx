import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginOpen: false,
  signUpOpen: false,
  anchorEl: false,
};

const modalSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setLoginOpen: (state, payload) => ({
      ...state,
      loginOpen: payload,
    }),
    setSignUpOpen: (state, payload) => ({
      ...state,
      signUpOpen: payload,
    }),
    setAnchorEl: (state, payload) => ({
      ...state,
      anchorEl: payload,
    }),
  },
  extraReducers: {},
});

export const { setLoginOpen, setSignUpOpen, setAnchorEl } = modalSlice.actions;
export default modalSlice.reducer;
