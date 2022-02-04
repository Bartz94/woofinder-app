import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './main-page';
import { LoginForm } from './../components/loginform';
import { Switch } from '@mui/material';
import { RegisterForm } from '../components/registerform';
import WantedPage from '../content/wanted-page'

export const Content = () => {
    <>
        <Switch>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={LoginForm} />
            <Route path="/register" element={RegisterForm} />
        </Switch>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/wanted-page" element={<WantedPage />} />
        </Routes>
    </>

}




