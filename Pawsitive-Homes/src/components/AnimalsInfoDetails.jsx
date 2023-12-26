import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function AnimalsInfoDetails({ animals }) {
    const { id } = useParams();

    const details = animals.find((animal) => String(animal.id) === String(id));
    return details ? (
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
        </div>
    ) : (
        <p>Animal not found</p>
    );
}

AnimalsInfoDetails.propTypes = {
    animals: PropTypes.array.isRequired,
};

export default AnimalsInfoDetails;
