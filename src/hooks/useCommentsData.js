import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const token = useSelector((state) => state.tokenReducer.token);
  const comments = useSelector((state) => state.comments.comments);
  const post = useSelector((state) => state.comments.post);
  const status = useSelector((state) => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [post, comments, status];
};
