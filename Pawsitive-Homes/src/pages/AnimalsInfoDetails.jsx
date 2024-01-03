import { useLocation, useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import AnimalUpdateForm from '../components/AnimalUpdateForm';
import api from '../services/animalsApi';
import { Button } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { AnimalListContext } from '../context/AnimalListContext';

function AnimalsInfoDetails() {
    const { animals, fetchAnimals } = useContext(AnimalListContext);
    const [isDeleted, setIsDeleted] = useState(false);
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        fetchAnimals();
    }, [location]);

    const details = animals.find((animal) => String(animal.id) === String(id));

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
                <AnimalUpdateForm animal={details} />
            </>
        </PageContainer>
    ) : (
        <p>
            {isDeleted ? 'Animal deleted successfully!' : 'Animal not found!'}
        </p>
    );
}

export default AnimalsInfoDetails;
