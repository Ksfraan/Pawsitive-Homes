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
            await api.deleteAnimal(id).then(() => {
                setIsDeleted(true);
            });
        } catch (error) {
            console.error('Error deleting animal:', error);
        }
    };
    return details && !isDeleted ? (
        <PageContainer>
            <div className='animals-details-page-wrapper'>
                <h1>{details.title}</h1>
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
                    <strong>Description:</strong> {details.description}
                </p>
                <img src={details.image} alt={details.name} />
                <Button onClick={handleDeleteAnimal}>Delete Animal</Button>

                <AnimalUpdateForm
                    animal={details}
                    onUpdate={updateAnimalInState}
                />
            </div>
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
