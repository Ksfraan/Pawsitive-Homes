import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import animalsApi from '../services/animalsApi';

export const AnimalListContext = createContext();

export const AnimalContextProvider = ({ children }) => {
    const [animals, setAnimals] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [hasFetchError, setHasFetchError] = useState(null);

    const fetchAnimals = async () => {
        setIsLoading(true);
        try {
            if (hasFetchError) {
                setHasFetchError(false);
            }

            animalsApi
                .getAnimals()
                .then((response) => {
                    setIsLoading(false);
                    setAnimals([...response]);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setHasFetchError(true);
                    console.error('Error fetching animals:', error);
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
        <AnimalListContext.Provider
            value={{ animals, hasFetchError, isLoading, fetchAnimals }}
        >
            {children}
        </AnimalListContext.Provider>
    );
};

AnimalContextProvider.propTypes = {
    children: PropTypes.array.isRequired,
};
