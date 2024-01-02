import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ButtonWithLink from '../components/ButtonWithLink';

const AnimalList = ({ animals, animalSpecies }) => {
    let title = animalSpecies;

    return (
        <PageContainer>
            <>
                <div className='animals-list'>
                    <center>
                        <h1>Animals for adoption</h1>
                    </center>
                    <div className='animals-list-add-button'>
                        <ButtonWithLink to={'/add-animal'}>
                            Add Animal
                        </ButtonWithLink>
                    </div>
                    <h2>{title}</h2>

                    <ul>
                        {animals
                            ? animals?.map((animal) => (
                                  <li key={animal.id}>
                                      <p>
                                          <strong>{`${animal.name}:`}</strong>{' '}
                                          {animal.species} {'-'}{' '}
                                          <strong>age: </strong>
                                          {`${animal.age} year(s) old`}
                                      </p>
                                      <Link to={`/animal/${animal.id}`}>
                                          <img
                                              src={animal.image}
                                              alt={animal.name}
                                          />
                                      </Link>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            </>
        </PageContainer>
    );
};

AnimalList.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            name: PropTypes.string,
            species: PropTypes.string,
            image: PropTypes.string,
        })
    ),
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
