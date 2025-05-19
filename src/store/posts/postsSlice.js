import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  page: '',
  isLast: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.posts = [];
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
        // state.isLast = false;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
        state.page = action.payload.page;
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },

  // extraReducers: {
  //   [postsRequestAsync.pending.type]: (state) => {
  //     state.loading = true;
  //     state.error = '';
  //   },
  //   [postsRequestAsync.fulfilled.type]: (state, action) => {
  //     state.loading = false;
  //     state.posts = action.payload.posts;
  //     state.page = action.payload.page;
  //     state.error = '';
  //     state.after = action.payload.after;
  //     state.isLast = !action.payload.after;
  //     // state.counter = action.payload.counter;
  //   },
  //   [postsRequestAsync.rejected.type]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error;
  //   },
  // },
});

export default postsSlice.reducer;
