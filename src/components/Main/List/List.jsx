import style from './List.module.css';
import { Post } from './Post/Post';
import { Text } from '../../UI/Text/Text';
import { usePopularPosts } from '../../../hooks/usePopularPosts';
import { Preloader } from '../../UI/Preloader/Preloader';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { postsRequestAsync } from '../../../store/posts/postsAction';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router';

export const List = () => {
  const [posts, loading] = usePopularPosts();
  // const posts = useSelector((state) => state.posts.posts);
  const endList = useRef(null);
  const isLast = useSelector((state) => state.posts.isLast);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!posts.length && !loading && isLast) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {posts.length ? (
          posts.map(({ data: postData }) => <Post key={postData.id} postData={postData} />)
        ) : (
          <Text As='p'>Постов не найдено</Text>
        )}

        <li ref={endList} className={style.end} />

        {!isLast && (loading || posts.length > 0) && <Preloader size={100} />}
      </ul>

      <Outlet />
    </>
  );
};
