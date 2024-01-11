import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import '../styles/Authentication.css';
import userIcon from '../assets/person.png';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import xIcon from '../assets/x.png';
import appleIcon from '../assets/apple.png';
import { Link } from 'react-router-dom';

function SignUp() {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.name === '' ||
            formData.email === '' ||
            formData.password === '' ||
            formData.confirmPassword === ''
        ) {
            alert('Please fill in all required fields');
            return;
        }

        setShowMessage(true);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>
                        {showMessage
                            ? 'Thank you for creating an account!'
                            : 'Create account!'}
                    </div>
                    <div className='underline'></div>
                </div>
                <div className='authenticator'>
                    <img src={googleIcon} alt='google icon' />
                    <img src={facebookIcon} alt='facebook icon' />
                    <img src={xIcon} alt='x icon' />
                    <img src={appleIcon} alt='apple icon' />
                </div>
                <div className='divider-wrapper'>
                    <div className='divider-container'>
                        <h5 className='divider'>Or</h5>
                    </div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={userIcon} alt='user' />
                        <input
                            type='text'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            name='name'
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={emailIcon} alt='email' />
                        <input
                            type='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            name='email'
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input
                            type='password'
                            placeholder='Create password'
                            value={formData.password}
                            onChange={handleChange}
                            name='password'
                            required
                        />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input
                            type='password'
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name='confirmPassword'
                            required
                        />
                    </div>
                </div>
                <div className='submitContainer'>
                    <button className='submit' onClick={handleSubmit}>
                        Sign Up
                    </button>
                </div>
                <div className='create-account-link'>
                    <p>
                        Already have an account? <Link to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}

export default SignUp;
