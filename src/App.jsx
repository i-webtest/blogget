import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { Route, Routes } from 'react-router';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
    </Routes>
  );
};

export default App;
