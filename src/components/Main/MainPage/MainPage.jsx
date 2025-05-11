import style from './MainPage.module.css';
import { Text } from '../../UI/Text/Text';

export const MainPage = () => (
  <div className={style.wrapper}>
    <Text As='h1' size={20} tsize={24} dsize={26}>
      Стартовая страница
    </Text>

    <Text As='p' bold size={16} tsize={18} dsize={20}>
      Добро пожаловать!
    </Text>

    <Text As='p' color='grey99' size={12} tsize={14} dsize={16}>
      Выберите категорию
    </Text>
  </div>
);
