import { Routes, Route } from 'react-router-dom';
import MainPage from './main-page';
import WantedPage from './wanted-page';


export const Content = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wanted-page" element={<WantedPage />} />
    </Routes>
);