import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { MainPage } from './main-page';
import { LoginForm } from '/components/loginform';
import { RegisterForm } from '../components/registerform';
import WantedList from '../components/wanted-list';



export const Content = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={LoginForm} />
            <Route path="/register" element={RegisterForm} />
            <Route path="wanted-list" element={<WantedList/>} />
       </Routes>
    </BrowserRouter>

}




