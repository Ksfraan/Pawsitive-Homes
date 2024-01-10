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

const AnimalList = ({ animalSpecies }) => {
    const { animals } = useContext(AnimalListContext);
    const { isMobile } = useContext(ViewportSizeContext);
    const [search, setSearch] = useState('searchOff');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
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
        setSearch((prevState) => (prevState === 'searchOff' ? 'searchOn' : 'searchOff'));
    };

    const handleImageClick = () => {
        toggleSearch();
    };

    const animalData = animals?.filter((animal) => {
        const speciesCondition =
            animalSpecies === 'All Species' ||
            (animalSpecies === 'Others' &&
                animal.species !== 'Cat' &&
                animal.species !== 'Dog') ||
            animal.species === animalSpecies;

        const ageCondition =
            selectedAge === '' ||
            (animal.age === selectedAge && typeof animal.age === 'string') ||
            (animal.age == selectedAge && typeof animal.age === 'number');

        const genderCondition =
            !selectedGender || animal.gender === selectedGender;
        const cityCondition = !selectedCity || animal.city === selectedCity;

        return (
            speciesCondition && ageCondition && genderCondition && cityCondition
        );
    });

    return (
        <PageContainer>
            <div className='animals-list'>
                <div className={`search`}>
                    <select className={`select ${search}`} name='Age' 
                    style={search === 'searchOff' ? {display: 'none'} : {display: 'block'}}
                    value={selectedAge}
                    onChange={(event) => setSelectedAge(event.target.value)}>
                        <option value="">All ages</option>
                        {sortArray([...new Set(animals.map((options) => options.age))]).map((age, i) => (
                            <option key={i}>{age}</option>
                        ))} 
                    </select>
                    <select name='Gender' 
                    style={search === 'searchOff' ? {display: 'none'} : {display: 'block'}}
                    value={selectedGender}
                    onChange={(event) => setSelectedGender(event.target.value)}>
                        <option value="">All genders</option>
                        {sortArray([...new Set(animals.map((options) => options.gender))]).map((gender, i) => (
                            <option key={i}>{gender}</option>
                        ))}
                    </select>
                    <select name='City' 
                    style={search === 'searchOff' ? {display: 'none'} : {display: 'block'}}
                    value={selectedCity}
                    onChange={(event) => setSelectedCity(event.target.value)}>
                        <option value="">All cities</option>                    
                        {sortArray([...new Set(animals.map((options) => options.city))]).map((city, i) => (
                            <option key={i}>{city}</option>
                        ))}
                    </select>
                    <img src={searchIcon} alt="Search" onClick={handleImageClick} />                    
                </div>
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
        </PageContainer>
    );
};

AnimalList.propTypes = {
    animalSpecies: PropTypes.string.isRequired,
};

export default AnimalList;
