import { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
