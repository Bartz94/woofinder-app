import { Routes, Route } from 'react-router-dom';
import MainPage from './main-page';
import WantedPage from './wanted-page';
import { Wanted } from '../components/wanted'
import { RegisterForm } from '../components/registerform';
import { LoginForm } from './../components/loginform';
import { Profile } from './profile';

export const Content = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wanted-page" element={<WantedPage />} />
        <Route path="/wanted-page/:id" element={<Wanted />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
);