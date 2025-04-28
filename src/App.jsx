import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useToken } from './hooks/useToken';
import { AuthContextProvider } from './context/authContext';
import { TokenContextProvider } from './context/tokenContext';

function App() {
  const [token, delToken] = useToken('');

  return (
    <>
      <TokenContextProvider token={token} delToken={delToken}>
        <AuthContextProvider>
          <Header />
          <Main />
        </AuthContextProvider>
      </TokenContextProvider>
    </>
  );
}

export default App;
