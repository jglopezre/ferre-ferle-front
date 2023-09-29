import { Layout } from './components/Layout';
import { CartContextProvider } from './contexts';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <CartContextProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </CartContextProvider>
  );
}

export default App;
