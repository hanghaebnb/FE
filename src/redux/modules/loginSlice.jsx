import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../core/api/axios';

const initialState = {
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk('login/SIGNUP', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('/api/users/signup', payload);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('login/LOGIN', async (payload, thunkAPI) => {
  try {
    const response = await instance.post('/api/users/login', {
      email: payload.email,
      password: payload.password,
    });
    payload.setCookie('accessToken', response.headers.authorization, { path: '/' });
    return thunkAPI.fulfillWithValue(response.headers.authorization);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
