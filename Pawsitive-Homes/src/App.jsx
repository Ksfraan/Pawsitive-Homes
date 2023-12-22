import { Route, Routes } from 'react-router-dom';
import Page404 from '../src/pages/Page404';
import DashboardPage from '../src/pages/DashboardPage';
//import AnimalList from './components/AnimalList';
//import { useState } from 'react';
//import api from './services/api';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<DashboardPage />} />

                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default App;
