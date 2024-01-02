import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageContainer from '../components/PageContainer';
import AnimalUpdateForm from '../components/AnimalUpdateForm';
import api from '../services/animalsApi';
import { Button } from '@mantine/core';
import { useState } from 'react';

function AnimalsInfoDetails({ animals, setAnimals }) {
    const { id } = useParams();
    const [isDeleted, setIsDeleted] = useState(false);

    const details = animals.find((animal) => String(animal.id) === String(id));

    const updateAnimalInState = (updatedAnimal) => {
        setAnimals((prevAnimals) => {
            return prevAnimals.map((animal) =>
                animal.id === updatedAnimal.id ? updatedAnimal : animal
            );
        });
    };

    const handleDeleteAnimal = async () => {
        try {
            await api.deleteAnimal(id);
            setIsDeleted(true);
        } catch (error) {
            console.error('Error deleting animal:', error);
        }
    };
    return details && !isDeleted ? (
        <PageContainer>
            <>
                <div className='animals-details-page-wrapper'>
                    <div className='additional-information-and-button'>
                        <h1>Additional Information</h1>
                        <Button onClick={handleDeleteAnimal} color='Crimson'>
                            Delete Animal
                        </Button>
                    </div>
                    <div className='animal-details-with-image'>
                        <div className='animal-details-without-image'>
                            <p>
                                <strong>Name:</strong> {details.name}
                            </p>
                            <p>
                                <strong>Breed:</strong> {details.breed}
                            </p>
                            <p>
                                <strong>Age:</strong> {details.age}
                            </p>
                            <p>
                                <strong>Gender:</strong> {details.gender}
                            </p>
                            <p>
                                <strong>Description:</strong>{' '}
                                {details.description}
                            </p>
                            <p>
                                <strong>City:</strong> {details.city}
                            </p>
                            <p>
                                <strong>Health:</strong> {details.health}
                            </p>
                            <p>
                                <strong>Available for adoption:</strong>{' '}
                                {details.available_for_adoption ? 'Yes' : 'No'}
                            </p>
                        </div>
                        <img src={details.image} alt={details.name} />
                    </div>
                </div>
                <AnimalUpdateForm
                    animal={details}
                    onUpdate={updateAnimalInState}
                />
            </>
        </PageContainer>
    ) : (
        <p>
            {isDeleted ? 'Animal deleted successfully!' : 'Animal not found!'}
        </p>
    );
}

AnimalsInfoDetails.propTypes = {
    animals: PropTypes.array.isRequired,
    setAnimals: PropTypes.func.isRequired,
};

export default AnimalsInfoDetails;
