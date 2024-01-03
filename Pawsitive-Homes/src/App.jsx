import { Route, Routes } from 'react-router-dom';
import Page404 from '../src/pages/Page404';
import AboutPage from './pages/AboutPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from '../src/components/Header';
import Navbar from './components/Navbar';
import AnimalList from './pages/AnimalList';
import DashboardPage from './pages/DashboardPage';
import AnimalsInfoDetails from './pages/AnimalsInfoDetails';
import AnimalForm from './pages/AnimalForm';
import { AnimalContextProvider } from './context/AnimalListContext';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <AnimalContextProvider>
                <Routes>
                    <Route path='/' element={<DashboardPage />} />

                    <Route
                        path='/dogs'
                        element={<AnimalList animalSpecies='Dog' />}
                    />
                    <Route
                        path='/cats'
                        element={<AnimalList animalSpecies='Cat' />}
                    />
                    <Route
                        path='/other-animals'
                        element={<AnimalList animalSpecies='Others' />}
                    />
                    <Route
                        path='/animal/:id'
                        element={<AnimalsInfoDetails />}
                    />
                    <Route path='/add-animal' element={<AnimalForm />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </AnimalContextProvider>
        </div>
    );
};

export default App;
