/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import '../styles/Authentication.css';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import xIcon from '../assets/x.png';
import appleIcon from '../assets/apple.png';

function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [isWelcomeVisible, setWelcomeVisible] = useState(true);
    const [isLoggedInVisible, setLoggedInVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.type]: e.target.value,
        });
    };

    const handleLogin = () => {
        setFormData({
            email: '',
            password: '',
        });

        setWelcomeVisible(false);
        setLoggedInVisible(true);
    };

    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>
                        {isWelcomeVisible ? 'Welcome Back!' : ''}
                        {isLoggedInVisible ? 'You are logged in!' : ''}
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
                        <img src={emailIcon} alt='email' />
                        <input
                            type='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input
                            type='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Link className='forgotPassword'>Forgot password?</Link>
                <div className='submitContainer'>
                    <button className='submit' onClick={handleLogin}>
                        Login
                    </button>
                </div>
                <div className='create-account-link'>
                    <p>
                        Don't have an account? <Link to='/signup'>Signup</Link>
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}

export default LogIn;
