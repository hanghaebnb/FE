import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../core/api/axios';

const initialState = {
  duplicate: {
    emailDuplicate: true,
    nickDuplicate: true,
  },
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

export const checkDuplicationEmail = createAsyncThunk(
  'login/CHECK_DUPLICATION_EMAIL',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post(`/api/users/email-check`, { email: payload });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const checkDuplicationNickname = createAsyncThunk(
  'login/CHECK_DUPLICATION_NICKNAME',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post(`/api/users/nick-check`, { nickname: payload });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearDuplicate: (state) => ({
      ...state,
      duplicate: { emailDuplicate: true, nickDuplicate: true },
    }),
    clearEmailDuplicate: (state) => ({
      ...state,
      duplicate: { emailDuplicate: true, nickDuplicate: state.duplicate.nickDuplicate },
    }),
    clearNickDuplicate: (state) => ({
      ...state,
      duplicate: {
        emailDuplicate: state.duplicate.emailDuplicate,
        nickDuplicate: true,
      },
    }),
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert('회원가입 성공');
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert('회원가입 실패');
    },

    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      alert('로그인 성공');
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert('로그인 실패');
    },

    [checkDuplicationEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [checkDuplicationEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.duplicate.emailDuplicate = action.payload.result;
      if (action.payload.result) alert('중복된 이메일입니다.');
      else alert('사용 가능한 이메일입니다.');
    },
    [checkDuplicationEmail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [checkDuplicationNickname.pending]: (state) => {
      state.isLoading = true;
    },
    [checkDuplicationNickname.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.duplicate.nickDuplicate = action.payload.result;
      if (action.payload.result) alert('중복된 닉네임입니다.');
      else alert('사용 가능한 닉네임입니다.');
    },
    [checkDuplicationNickname.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearDuplicate, clearEmailDuplicate, clearNickDuplicate } = loginSlice.actions;
export default loginSlice.reducer;
