import MainPage from './content/main-page';
import { UserContextProvider } from './services/user-context';
import { LoginForm } from './components/loginform';
import { RegisterForm } from './components/registerform';
import { WantedList } from './components/wanted-list';
import {  Route, Routes } from "react-router-dom"



function App() {
  return (
    
     <>
           <UserContextProvider> 
          {/* <MainPage></MainPage> */}
           </UserContextProvider>
           <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginForm/>} /> 
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="wanted-list" element={<WantedList/>} />
          </Routes>

       </>  


  );
}

export default App;
