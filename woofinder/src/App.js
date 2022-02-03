import MainPage from './content/main-page';
import { UserContextProvider } from './services/user-context';





function App() {
  return (
    
     
        <UserContextProvider>
        <MainPage></MainPage>
        </UserContextProvider>

  


  );
}

export default App;
