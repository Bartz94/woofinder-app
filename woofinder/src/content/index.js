import { Routes, Route } from 'react-router-dom'
import{ MainPage } from './main-page';
import { SignIn } from './signin';



export const Content = () => {
    <Routes>
            <Route Route path="/" element={<MainPage/>} />
            <Route Route path="/sign-in" element={<SignIn/>} />
    </Routes>
}




