// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   posts: [
//     {
//       title: "성수동hotel",
//       description: "저희 숙박업소는 10시까지 합니다",
//       price: "15000",
//       address: "서울 성수동 호텔",
//       imageFile: null,
//     },
//   ],
//   isLoading: false,
//   error: null,
// };

// const instance = axios.create({
//   baseURL: `http://localhost:3001/api`,
// });

// export const __getPosts = createAsyncThunk(
//   "posts/getPosts",
//   async (payload, ThunkAPI) => {
//     try {
//       console.log("getpayload", payload);
//       const response = await instance.get(`/rooms`);
//       return ThunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return ThunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const __addPosts = createAsyncThunk(
//   "posts/addPost",
//   async (payload, ThunkAPI) => {
//     try {
//       const formData = new FormData();
//       const json = JSON.stringify({
//         title: payload.title,
//         description: payload.description,
//         price: payload.price,
//         address: payload.address,
//         type: payload.type,
//       });
//       const blob = new Blob([json], {
//         type: "application/json",
//       });
//       formData.append("requestDto", blob);
//       formData.append("image", payload.image);
//       const data = await instance.post("/rooms", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("addpayload", payload);
//       return ThunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return ThunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const PostSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [__getPosts.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [__getPosts.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.posts = action.payload;
//     },
//     [__getPosts.rejected]: (state) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });
// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { __getPosts, __addPosts } = PostSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default PostSlice.reducer;
