import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import ButtonWithLink from '../components/ButtonWithLink';
import { useContext, useEffect } from 'react';
import { AnimalListContext } from '../context/AnimalListContext';

const AnimalList = ({ animalSpecies }) => {
    const { animals, fetchAnimals } = useContext(AnimalListContext);
    const location = useLocation();

    useEffect(() => {
        fetchAnimals();
    }, [location, fetchAnimals]);

    const animalData = animals?.filter((animal) => {
        switch (animalSpecies) {
            case 'Others':
                return animal.species !== 'Cat' && animal.species !== 'Dog';
            case 'All Species':
                return animal;
            default:
                return animal.species === animalSpecies;
        }
    });

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
                    <h2>{animalSpecies}</h2>

                    <ul className='animals-list-information'>
                        {animalData
                            ? animalData?.map((animal) => (
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
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
