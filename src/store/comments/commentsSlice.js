import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './commentsAction';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [commentsRequestAsync.pending.type]: (state) => {
  //     state.status = 'loading';
  //     state.error = '';
  //   },
  //   [commentsRequestAsync.fulfilled.type]: (state, action) => {
  //     state.status = 'loaded';
  //     state.post = action.payload.post;
  //     state.comments = action.payload.comments;
  //     state.error = '';
  //   },
  //   [commentsRequestAsync.rejected.type]: (state, action) => {
  //     state.status = 'error';
  //     state.error = action.error;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

export default commentsSlice.reducer;
