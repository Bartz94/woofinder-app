import { Routes, Route } from 'react-router-dom';
import MainPage from './main-page';
import WantedPage from './wanted-page';

import { RegisterForm } from '../components/registerform';
import { LoginForm } from './../components/loginform';


export const Content = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wanted-page" element={<WantedPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
    </Routes>
);