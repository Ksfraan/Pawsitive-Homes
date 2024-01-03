import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import animalsApi from '../services/animalsApi';

export const AnimalListContext = createContext();

export const AnimalContextProvider = ({ children }) => {
    const [animals, setAnimals] = useState([]);

    const fetchAnimals = async () => {
        try {
            animalsApi.getAnimals().then((response) => {
                setAnimals([...response]);
            });
        } catch (error) {
            console.error('Error fetching animals:', error);
        }
    };

    // Fetch animals on mount
    useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <AnimalListContext.Provider value={{ animals, fetchAnimals }}>
            {children}
        </AnimalListContext.Provider>
    );
};

AnimalContextProvider.propTypes = {
    children: PropTypes.object.isRequired,
};
