import style from './List.module.css';
import { Post } from './Post/Post';
import { Text } from '../../UI/Text/Text';
import { usePopularPosts } from '../../../hooks/usePopularPosts';
import { Preloader } from '../../UI/Preloader/Preloader';

export const List = () => {
  const [posts, loading] = usePopularPosts();

  return (
    <ul className={style.list}>
      {loading ? (
        <Preloader size={100} />
      ) : posts ? (
        posts.map(({ data: postData }) => <Post key={postData.id} postData={postData} />)
      ) : (
        <Text As='p'>Постов не найдено</Text>
      )}
    </ul>
  );
};
