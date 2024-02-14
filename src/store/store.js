import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subRedditsSlice';
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from "../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
});
