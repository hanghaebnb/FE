import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getCookie, setCookie, delCookie } from "../../cookie/cookie";
// import instance from "../../shared/api";

const initialState = {
  account: [
    {
      email: 'abc@naver.com',
      nickname: 'abcd1234',
      password: 'abcd1234',
    },
  ],
  isLoading: false,
  error: null,
  isLogin: false,
};

const instance = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const __userLogin = createAsyncThunk(
  'account/userLogin',
  // login : reducer name, 경로 정해줘야
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/users/login`, {
        email: payload.email,
        nickname: payload.nickname,
        password: payload.password,
      });
      // const Access_Token = data.headers.authorization;
      // localStorage.setItem("token", Access_Token);
      payload.navigate('/');
      // window.location.replace('/');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.data.status > 400 && error.data.status < 500) {
        // window.location.reload();
        alert('로그인 실패');
      }
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __checkEmail = createAsyncThunk(
  'account/checkEmail',
  // type
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`/users/login`, {
        userid: payload,
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __checkName = createAsyncThunk('account/checkName', async (payload, thunkAPI) => {
  try {
    const data = await instance.post(`/users/login`, {
      nickname: payload,
    });
    // 415는 타입에러. {}로 감싸서 보낸다.
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __checkPw = createAsyncThunk(
  'account/checkPw',
  // type
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`/users/login`, {
        userid: payload,
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __userSignUp = createAsyncThunk('account/userSignUp', async (payload, thunkAPI) => {
  console.log(payload);
  try {
    const data = await instance.post(`/users/signup`, payload.obj);
    console.log(data.data.msg);
    return thunkAPI.fulfillWithValue({
      msg: data.data.msg,
      // navigate: payload.navigate,
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const LoginSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {
    [__userLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.account = action.payload.nickname;
      state.isLogin = true;
      console.log(action.payload);
      alert(action.payload.msg); //
    },
    [__userLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__checkEmail.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__checkEmail.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.idCheck = action.payload;
    },
    [__checkEmail.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__checkName.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__checkName.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.nameCheck = action.payload;
    },
    [__checkName.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__checkPw.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__checkPw.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.idCheck = action.payload;
    },
    [__checkPw.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__userSignUp.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__userSignUp.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      console.log(action.payload);
      alert(action.payload.msg);
      // action.payload.navigate("/login");
    },
    [__userSignUp.rejected]: (state) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.isSuccess = false;
      alert('회원가입에 실패하셨습니다.'); // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { userLogin, userSignUp, checkEmail, checkPw, checkName } = LoginSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default LoginSlice.reducer;
