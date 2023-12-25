import PropTypes from 'prop-types';

const AnimalList = ({ animals, animalSpecies }) => {
    let title = animalSpecies;

    return (
        <div className='animals-list'>
            <h2>{title}</h2>
            <ul>
                {animals
                    ? animals?.map((animal) => (
                          <li key={animal.id}>
                              <p>
                                  <strong>{`${animal.name}:`}</strong>{' '}
                                  {animal.species} {'-'} <strong>age: </strong>
                                  {`${animal.age} year(s) old`}
                              </p>
                              <img src={animal.image} alt={animal.name} />
                          </li>
                      ))
                    : null}
            </ul>
        </div>
    );
};

AnimalList.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
