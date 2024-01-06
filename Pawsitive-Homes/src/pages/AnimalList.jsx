import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonWithLink from '../components/ButtonWithLink';
import { useContext } from 'react';
import PlusSign from '../assets/plus-sign.png';
import TouchSymbol from '../assets/touch-screen-symbol.png';
import { AnimalListContext } from '../context/AnimalListContext';
import { ViewportSizeContext } from '../context/ViewportSizeContext';
import { animalAgeConverter } from '../utils/AnimalAgeConverter';
import '../styles/AnimalList.css';

const AnimalList = ({ animalSpecies }) => {
    const { animals } = useContext(AnimalListContext);
    const { isMobile } = useContext(ViewportSizeContext);

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
        <>
            <div className='animals-list'>
                <center>
                    <h1>Animals for adoption</h1>
                </center>
                <div className='animals-list-add-button'>
                    <ButtonWithLink to={'/add-animal'}>
                        <img className='plus-sign' src={PlusSign} alt='' />
                        <span>Add Animal</span>
                    </ButtonWithLink>
                </div>
                <h2>{animalSpecies}</h2>

                <ul className='animals-list-information'>
                    {animalData
                        ? animalData.map((animal) => {
                              const animalAge = animalAgeConverter(animal.age);

                              return (
                                  <Link
                                      to={`/animal/${animal.id}`}
                                      key={animal.id}
                                  >
                                      <li className='animal-list-item'>
                                          <p className='animal-info-text'>
                                              <strong>{`${animal.name}:`}</strong>{' '}
                                              {animal.species}
                                              <br />
                                              <span>{`${animalAge}(s) old`}</span>
                                          </p>
                                          <div className='image-wrapper'>
                                              {isMobile ? (
                                                  <img
                                                      className='touch-mobile-symbol'
                                                      src={TouchSymbol}
                                                      alt={
                                                          'Touch Screen Symbol'
                                                      }
                                                  />
                                              ) : null}
                                              <img
                                                  className='animal-image'
                                                  src={animal.image}
                                                  alt={animal.name}
                                              />
                                          </div>
                                      </li>
                                  </Link>
                              );
                          })
                        : null}
                </ul>
            </div>
        </>
    );
};

AnimalList.propTypes = {
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
