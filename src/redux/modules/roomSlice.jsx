import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL, instance } from '../../core/api/axios';

const initialState = {
  rooms: [],
  room: {
    title: '',
    description: '',
    price: 0,
    address: '',
    type: '',
    userId: 0,
    likeCheck: false,
  },
  isLoading: false,
  error: null,
};

export const createRoom = createAsyncThunk('room/CREATE_ROOM', async (payload, thunkAPI) => {
  try {
    const formData = new FormData();
    const json = JSON.stringify(payload.room);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('data', blob);
    // formData.append('file', payload.imageFile);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < payload.imageFile.length; i++) {
      formData.append('file', payload.imageFile[i]);
    }
    console.log(payload.imageFile);
    console.log(payload.room);
    const response = await baseURL.post('/api/rooms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readRooms = createAsyncThunk('room/READ_ROOMS', async (payload, thunkAPI) => {
  try {
    const data = await baseURL.get(`/api/rooms`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const readRoom = createAsyncThunk('room/READ_ROOMS', async (payload, thunkAPI) => {
  try {
    console.log('payload', payload);
    const response = await baseURL.get(`/api/rooms`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const nonMemberReadRooms = createAsyncThunk(
  'room/NON_MEMBER_READ_ROOMS',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`/api/rooms/main${payload}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateRooms = createAsyncThunk('room/UPDATE_ROOMS', async (payload, thunkAPI) => {
  try {
    const formData = new FormData();
    const json = JSON.stringify(payload.Room);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('data', blob);
    formData.append('file', payload.img);

    const response = await baseURL.patch(`/api/rooms/${payload.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteRooms = createAsyncThunk('room/DELETE_ROOMS', async (payload, thunkAPI) => {
  try {
    const response = await baseURL.delete(`api/rooms/${payload}`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addLike = createAsyncThunk('room/ADD_LIKE', async (payload, thunkAPI) => {
  try {
    const response = await baseURL.post(`api/rooms/${payload}/like`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteLike = createAsyncThunk('room/DELETE_LIKE', async (payload, thunkAPI) => {
  try {
    const response = await baseURL.delete(`api/rooms/${payload}/like`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: {
    [createRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [createRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [readRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [readRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = [...state.rooms, ...action.payload];
    },

    [readRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [readRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [readRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
    },
    [readRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [nonMemberReadRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [nonMemberReadRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rooms = action.payload;
    },
    [nonMemberReadRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [updateRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [updateRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteRooms.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteRooms.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteRooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default roomSlice.reducer;
