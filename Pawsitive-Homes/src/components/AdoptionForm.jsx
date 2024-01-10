import { useState } from 'react';
import ButtonStyled from './ButtonStyled';
import PropTypes from 'prop-types';

const AdoptionForm = ({ animal }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
    };

    return (
        <div className='adoption-form'>
            <h2>Did you like this animal?</h2>
            <p>
                Express your interest in adopting this animal or ask for more
                details from the caretaker by filling out the form below:
            </p>
            <form onSubmit={handleSubmit}>
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
                    Email:
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone Number (+351 Portugal):
                    <input
                        type='tel'
                        name='phoneNumber'
                        pattern='^\+351\d{9}$'
                        placeholder='+351XXXXXXXXX'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>

                <ButtonStyled type='submit' colorOverride={'green'}>
                    Submit Interest
                </ButtonStyled>
            </form>
        </div>
    );
};

AdoptionForm.propTypes = {
    animal: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
};

export default AdoptionForm;
