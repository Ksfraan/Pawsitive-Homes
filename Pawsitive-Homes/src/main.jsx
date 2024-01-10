import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

import { AnimalContextProvider } from './context/AnimalListContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimalContextProvider>
                <App />
                <ScrollToTop />                  
            </AnimalContextProvider>            
        </BrowserRouter>
    </React.StrictMode>
);
