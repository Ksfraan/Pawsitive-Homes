import animalsApi from '../services/animalsApi';
import { Button } from '@mantine/core';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const AnimalUpdateForm = ({ animal, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        breed: '',
        age: '',
        gender: '',
        description: '',
        available_for_adoption: '',
        image: '',
    });

    useEffect(() => {
        setFormData({
            name: animal.name || '',
            species: animal.species || '',
            breed: animal.breed || '',
            age: animal.age || '',
            gender: animal.gender || '',
            description: animal.description || '',
            available_for_adoption: String(animal.available_for_adoption) || '',
            image: animal.image || '',
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
            const updatedAnimal = await animalsApi.updateAnimal(
                animal.id,
                formData
            );
            onUpdate(updatedAnimal);
        } catch (error) {
            console.error('Error updating animal:', error);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='update-animal-form-wrapper'
            >
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='input-field-update'
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
                        className='input-field-update'
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
                        className='input-field-update'
                    />
                </label>
                <label>
                    Age:
                    <input
                        type='number'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>

                <label>
                    Description:
                    <input
                        type='text'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='input-field-update'
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
                        placeholder='Ex: www.myimage.png'
                        onChange={handleChange}
                        required
                        className='input-field-update'
                    />
                </label>

                <Button
                    type='submit'
                    variant='filled'
                    color='#1e2761'
                    size='lg'
                    radius='md'
                >
                    Update Animal
                </Button>
            </form>
        </div>
    );
};

AnimalUpdateForm.propTypes = {
    animal: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

export default AnimalUpdateForm;
