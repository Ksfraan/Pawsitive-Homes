import { Route, Routes } from 'react-router-dom';
import Page404 from '../src/pages/Page404';
import DashboardPage from '../src/pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Header from '../src/components/Header';
import DogsList from './components/DogsList';
import { useEffect, useState } from 'react';
import api from './services/api';

const App = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await api.get('/animals');
                const dogsData = response.data.filter(
                    (animal) => animal.species === 'Dog'
                );
                setDogs(dogsData);
            } catch (error) {
                console.error('Error fetching dogs:', error);
                setError('Error loading dogs.');
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
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
            <Routes>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/dogs' element={<DogsList dogs={dogs} />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
};

export default App;
