import animalsApi from '../services/animalsApi';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mantine/core';
import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import '../styles/AnimalForm.css';

const initialFormData = {
    id: '',
    name: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    description: '',
    image: '',
    available_for_adoption: '',
    city: '',
    health: '',
};

const AnimalForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataWithId = {
            ...formData,
            id: uuidv4(),
        };

        animalsApi.addAnimal(formDataWithId).then(() => {
            // reset formData
            setFormData(initialFormData);
        });
    };

    const renderLabelWithInput = (label, props) => (
        <label>
            {label}
            <input {...props} onChange={handleChange} required />
        </label>
    );

    return (
        <PageContainer>
            <div className='form-container'>
                <h1>Add an animal</h1>
                <form onSubmit={handleSubmit} className='animal-form'>
                    {renderLabelWithInput('Name', {
                        type: 'text',
                        value: formData.name,
                        name: 'name',
                    })}
                    {renderLabelWithInput('Species', {
                        type: 'text',
                        value: formData.species,
                        name: 'species',
                    })}
                    {renderLabelWithInput('Breed', {
                        type: 'text',

                        value: formData.breed,
                        name: 'breed',
                    })}
                    {renderLabelWithInput('Age', {
                        type: 'number',
                        min: '0',
                        max: '99',
                        value: formData.age,
                        name: 'age',
                    })}
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
                    {renderLabelWithInput('City', {
                        type: 'text',
                        value: formData.city,
                        name: 'city',
                    })}
                    {renderLabelWithInput('Health', {
                        type: 'text',
                        value: formData.health,
                        name: 'health',
                    })}
                    {renderLabelWithInput('Photo', {
                        value: formData.image,
                        name: 'image',
                        placeholder: 'Ex: www.myimage.png',
                    })}
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

                    <Button
                        type='submit'
                        variant='filled'
                        color='#1e2761'
                        size='lg'
                        radius='md'
                    >
                        Add Animal
                    </Button>
                </form>
            </div>
        </PageContainer>
    );
};

export default AnimalForm;
