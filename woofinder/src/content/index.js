import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './main-page';
import { LoginForm } from './../components/loginform';
import { Switch } from '@mui/material';



export const Content = () => {
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={LoginForm} />
        </Switch>
    </BrowserRouter>

}




