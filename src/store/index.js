import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import commentsReducer from './comments/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/postsSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { searchReducer } from './search/searchReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
