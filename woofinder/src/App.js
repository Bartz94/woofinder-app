import MainPage from './content/main-page';
import { UserContextProvider } from './services/user-context';
import { Content } from './content';
import { SearchContextProvider } from './contexts/search-context';

function App() {
  return (
    <SearchContextProvider>
      <UserContextProvider>
        <Content>
        </Content>
      </UserContextProvider>
    </SearchContextProvider>

  );
}

export default App;
