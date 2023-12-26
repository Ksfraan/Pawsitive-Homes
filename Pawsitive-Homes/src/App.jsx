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
import { useEffect, useState } from 'react';
import animalsApi from './services/animalsApi';
import AnimalForm from './pages/AnimalForm';

const App = () => {
    const [animals, setAnimals] = useState([]);
    const [cats, setCats] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [others, setOthers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = animalsApi.getAnimals;

                const animalsData = response.data;

                const dogsData = response.data.filter(
                    (animal) => animal.species === 'Dog'
                );

                const catsData = response.data.filter(
                    (animal) => animal.species === 'Cat'
                );

                const othersData = response.data.filter(
                    (animal) =>
                        animal.species !== 'Cat' && animal.species !== 'Dog'
                );

                setAnimals(animalsData);
                setDogs(dogsData);
                setCats(catsData);
                setOthers(othersData);
            } catch (error) {
                console.error('Error fetching animals:', error);
                setError('Error loading animals.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnimals();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<DashboardPage animals={animals} />} />

                <Route
                    path='/dogs'
                    element={<AnimalList animals={dogs} animalSpecies='Dog' />}
                />
                <Route
                    path='/cats'
                    element={<AnimalList animals={cats} animalSpecies='Cat' />}
                />
                <Route
                    path='/other-animals'
                    element={
                        <AnimalList animals={others} animalSpecies='Others' />
                    }
                />
                <Route
                    path='/animal/:id'
                    element={<AnimalsInfoDetails animals={animals} />}
                />
                <Route path='/add-animal' element={<AnimalForm />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default App;
