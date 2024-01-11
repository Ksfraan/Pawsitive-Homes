import { useParams } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import AnimalUpdateForm from '../components/AnimalUpdateForm';
import api from '../services/animalsApi';
import { useContext, useState } from 'react';
import { AnimalListContext } from '../context/AnimalListContext';
import ButtonStyled from '../components/ButtonStyled';
import { animalAgeConverter } from '../utils/AnimalAgeConverter';
import AdoptionForm from '../components/AdoptionForm';

function AnimalsInfoDetails() {
    const { animals, fetchAnimals } = useContext(AnimalListContext);
    const [isDeleted, setIsDeleted] = useState(false);
    const { id } = useParams();

    const details = animals.find((animal) => String(animal.id) === String(id));

    const handleDeleteAnimal = async () => {
        try {
            api.deleteAnimal(id).then(() => {
                fetchAnimals();
                setIsDeleted(true);
            });
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
                        <ButtonStyled
                            onClick={handleDeleteAnimal}
                            colorOverride={'Crimson'}
                        >
                            Delete Animal
                        </ButtonStyled>
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
                                <strong>Age:</strong>{' '}
                                {`${animalAgeConverter(details.age)}(s) old`}
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
                    <div className='adoption-form-wrapper'>
                        <AdoptionForm animal={details} />
                    </div>
                </div>
                <AnimalUpdateForm animal={details} />
            </>
        </PageContainer>
    ) : (
        <div className='deleted-animal-message'>
            <p>
                {isDeleted
                    ? 'Animal deleted successfully!'
                    : 'Animal not found!'}
            </p>
        </div>
    );
}

export default AnimalsInfoDetails;
