import { useState } from 'react';
import ButtonStyled from './ButtonStyled';
import '../styles/AdoptionForm.css';

const AdoptionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [isSuccessMessageVisible, setSuccessMessageVisible] = useState(false);

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

        setSuccessMessageVisible(true);
    };

    return (
        <div className='adoption-form'>
            {isSuccessMessageVisible ? (
                <div className='success-message'>
                    <p>
                        Your request has been submitted successfully. We will
                        contact you soon!
                    </p>
                </div>
            ) : (
                <>
                    <h2>Did you like this animal?</h2>
                    <p>
                        Express your interest in adopting this animal or ask for
                        more details from the caretaker by filling out the form
                        below:
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                className=''
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
                            Phone Number:
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
                </>
            )}
        </div>
    );
};

export default AdoptionForm;
