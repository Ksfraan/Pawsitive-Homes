import animalsApi from '../services/animalsApi';
import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { AnimalListContext } from '../context/AnimalListContext';
import ButtonStyled from './ButtonStyled';

const AnimalUpdateForm = ({ animal }) => {
    const { fetchAnimals } = useContext(AnimalListContext);

    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        age: '',
        gender: '',
        description: '',
        available_for_adoption: '',
        image: '',
        city: '',
        health: '',
    });

    useEffect(() => {
        setFormData({
            name: animal.name || '',
            species: animal.species || '',
            breed: animal.breed || '',
            age: animal.age || '',
            gender: animal.gender || '',
            description: animal.description || '',
            available_for_adoption: animal.available_for_adoption || '',
            image: animal.image || '',
            city: animal.city || '',
            health: animal.health || '',
        });
    }, [animal]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            animalsApi.updateAnimal(animal.id, formData).then(() => {
                fetchAnimals();
            });
        } catch (error) {
            console.error('Error updating animal:', error);
        }
    };

    return (
        <div className='form-container'>
            <h1>Update an animal</h1>
            <form onSubmit={handleSubmit} className='animal-form'>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Breed:
                    <input
                        type='text'
                        name='breed'
                        value={formData.breed}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Species:
                    <input
                        type='text'
                        name='species'
                        value={formData.species}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Age:
                    <input
                        type='text'
                        name='age'
                        value={formData.age}
                        placeholder='Ex: 8 Months'
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        type='text'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='form-description'
                    />
                </label>
                <label>
                    City:
                    <input
                        type='text'
                        name='city'
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Health:
                    <input
                        type='text'
                        name='health'
                        value={formData.health}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Gender
                    <select name='gender' onChange={handleChange} required>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </label>
                <label>
                    Available for adoption
                    <select
                        name='available_for_adoption'
                        onChange={handleChange}
                        required
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </label>
                <label>
                    Photo:
                    <input
                        type='text'
                        name='image'
                        value={formData.image}
                        placeholder='Ex: www.myimage.png'
                        onChange={handleChange}
                        required
                    />
                </label>

                <ButtonStyled type='submit'>Update Animal</ButtonStyled>
            </form>
        </div>
    );
};

AnimalUpdateForm.propTypes = {
    animal: PropTypes.object.isRequired,
};

export default AnimalUpdateForm;
