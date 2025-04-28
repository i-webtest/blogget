import React from 'react';
import { usePopularPosts } from '../hooks/usePopularPosts';
import PropTypes from 'prop-types';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
  const [posts] = usePopularPosts();

  return <postsContext.Provider value={{ posts }}>{children}</postsContext.Provider>;
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
