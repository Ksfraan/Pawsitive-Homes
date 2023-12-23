import PropTypes from 'prop-types';

const DogsList = ({ dogs }) => {
    return (
        <div>
            <h2>Dogs List</h2>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.id}>
                        <strong>{dog.name}</strong> - {dog.breed}
                        <p>
                            {' '}
                            <img src={dog.image} alt={dog.name} />{' '}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

DogsList.propTypes = {
    dogs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            breed: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DogsList;
