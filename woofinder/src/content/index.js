import { Routes, Route } from 'react-router-dom';
import MainPage from './main-page';


export const Content = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
    </Routes>
);