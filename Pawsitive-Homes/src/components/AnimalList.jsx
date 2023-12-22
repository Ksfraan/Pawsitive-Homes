import { useEffect, useState } from 'react';
import api from '../services/api';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await api.get('/animals');
                setAnimals(response.data);
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
            <h2>Animal List</h2>
            <ul>
                {animals?.map((animal) => (
                    <li key={animal.id}>
                        <strong>{animal.name}</strong> - {animal.species} -
                        {animal.image}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
