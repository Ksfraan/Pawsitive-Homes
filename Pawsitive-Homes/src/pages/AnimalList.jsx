import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonWithLink from '../components/ButtonWithLink';
import { useContext, useState } from 'react';
import PlusSign from '../assets/plus-sign.png';
import TouchSymbol from '../assets/touch-screen-symbol.png';
import { AnimalListContext } from '../context/AnimalListContext';
import { ViewportSizeContext } from '../context/ViewportSizeContext';
import { animalAgeConverter } from '../utils/AnimalAgeConverter';
import '../styles/AnimalList.css';
import searchIcon from '../assets/search.png';
import PageContainer from '../components/PageContainer';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

const initialFiltersData = {
    age: '',
    gender: '',
    city: '',
    goodWith: '',
};

const AnimalList = ({ animalSpecies }) => {
    const { animals, isLoading, hasFetchError } = useContext(AnimalListContext);
    const { isMobile } = useContext(ViewportSizeContext);

    const [search, setSearch] = useState('searchOff');
    const [selectedFilters, setSelectedFilters] = useState(initialFiltersData);

    const sortArray = (array) => {
        return array.sort((a, b) => {
            if (typeof a === 'string' && typeof b === 'string') {
                return a.localeCompare(b);
            } else {
                return a - b;
            }
        });
    };

    const toggleSearch = () => {
        setSearch((prevState) =>
            prevState === 'searchOff' ? 'searchOn' : 'searchOff'
        );
    };

    const handleImageClick = () => {
        toggleSearch();
    };

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    const renderSelect = (label, filterType, options) => (
        <select
            className={`select ${search}`}
            name={label}
            style={
                search === 'searchOff'
                    ? { display: 'none' }
                    : { display: 'block' }
            }
            value={selectedFilters[filterType]}
            onChange={(event) =>
                handleFilterChange(filterType, event.target.value)
            }
        >
            <option value=''>{`All ${label.toLowerCase()}`}</option>
            {sortArray(options).map((option, i) => (
                <option key={i}>{option}</option>
            ))}
        </select>
    );

    const animalData = animals?.filter((animal) => {
        const speciesCondition =
            animalSpecies === 'All Species' ||
            (animalSpecies === 'Others' &&
                animal.species !== 'Cat' &&
                animal.species !== 'Dog') ||
            animal.species === animalSpecies;

        const ageCondition =
            selectedFilters.age === '' ||
            (animal.age === selectedFilters.age &&
                typeof animal.age === 'string') ||
            (animal.age == selectedFilters.age &&
                typeof animal.age === 'number');

        const genderCondition =
            !selectedFilters.gender || animal.gender === selectedFilters.gender;
        const cityCondition =
            !selectedFilters.city || animal.city === selectedFilters.city;

        const goodWithCondition =
            !selectedFilters.goodWith ||
            animal['Good in a home with']
                .toLowerCase()
                .includes(selectedFilters.goodWith.toLowerCase());

        return (
            speciesCondition &&
            ageCondition &&
            genderCondition &&
            cityCondition &&
            goodWithCondition
        );
    });

    return (
        <PageContainer>
            <div className='animals-list'>
                <div className={`search`}>
                    {renderSelect(
                        'Age',
                        'age',
                        [
                            ...new Set(animals.map((options) => options.age)),
                        ].filter(Boolean)
                    )}
                    {renderSelect(
                        'Gender',
                        'gender',
                        [
                            ...new Set(
                                animals.map((options) => options.gender)
                            ),
                        ].filter(Boolean)
                    )}
                    {renderSelect(
                        'City',
                        'city',
                        [
                            ...new Set(animals.map((options) => options.city)),
                        ].filter(Boolean)
                    )}
                    {renderSelect(
                        'GoodWith',
                        'goodWith',
                        [
                            ...new Set(
                                animals
                                    .map(
                                        (options) =>
                                            options['Good in a home with']
                                    )
                                    .flat()
                            ),
                        ].filter(Boolean)
                    )}
                    <img
                        src={searchIcon}
                        alt='Search'
                        onClick={handleImageClick}
                    />
                </div>
                <center>
                    <h1>Animals for adoption</h1>
                </center>
                {isLoading ? (
                    <Loading />
                ) : hasFetchError ? (
                    <ErrorMessage />
                ) : (
                    <div>
                        <div className='animals-list-add-button'>
                            <ButtonWithLink to={'/add-animal'}>
                                <img
                                    className='plus-sign'
                                    src={PlusSign}
                                    alt=''
                                />
                                <span>Add Animal</span>
                            </ButtonWithLink>
                        </div>
                        <h2>{animalSpecies}</h2>

                        <ul className='animals-list-information'>
                            {animalData
                                ? animalData.map((animal) => {
                                      const animalAge = animalAgeConverter(
                                          animal.age
                                      );

                                      return (
                                          <Link
                                              to={`/animal/${animal.id}`}
                                              key={animal.id}
                                          >
                                              <li className='animal-list-item'>
                                                  <p className='animal-info-text'>
                                                      <strong>{`${animal.name}:`}</strong>{' '}
                                                      {animal.species} <br />
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
                )}
            </div>
        </PageContainer>
    );
};

AnimalList.propTypes = {
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
