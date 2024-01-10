import animalsApi from '../services/animalsApi';
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from 'react';
import PageContainer from '../components/PageContainer';
import { AnimalListContext } from '../context/AnimalListContext';
import '../styles/AnimalForm.css';
import ButtonStyled from '../components/ButtonStyled';

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
    const { fetchAnimals } = useContext(AnimalListContext);
    const [formData, setFormData] = useState(initialFormData);
    const [isAdded, setIsAdded] = useState(null);
    const [hasError, setHasError] = useState(null);

    const handleChange = (e) => {
        if (isAdded) {
            setIsAdded(false);
        }

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

        try {
            await animalsApi.addAnimal(formDataWithId);

            setFormData(initialFormData);
            setIsAdded(true);

            fetchAnimals();
        } catch (error) {
            console.log('Error adding animal:', error);
            setHasError(true);
        }
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

                    {hasError && <p className='error'>An error has occured!</p>}
                    {!isAdded && (
                        <p className='successfullMessage'>
                            {'Animal Added successfully!'}
                        </p>
                    )}

                    <ButtonStyled type='submit'>Add Animal</ButtonStyled>
                </form>
            </div>
        </PageContainer>
    );
};

export default AnimalForm;
