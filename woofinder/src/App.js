import MainPage from './content/main-page';
import { UserContextProvider } from './services/user-context';
import { Content } from './content';

function App() {
  return (
    <UserContextProvider>
      <Content>
      </Content>
    </UserContextProvider>

  );
}

export default App;
