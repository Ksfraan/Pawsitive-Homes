import { Route, Routes } from 'react-router-dom';
import Page404 from '../src/pages/Page404';
import DashboardPage from '../src/pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from '../src/components/Header'
//import AnimalList from './components/AnimalList';
//import { useState } from 'react';
//import api from './services/api';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />

                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default App;
