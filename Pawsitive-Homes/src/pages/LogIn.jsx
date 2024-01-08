/* eslint-disable react/no-unescaped-entities */
import PageContainer from '../components/PageContainer';
import '../styles/Authentication.css';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import xIcon from '../assets/x.png';
import appleIcon from '../assets/apple.png';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>Welcome Back!</div>
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
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input type='password' placeholder='Password' />
                    </div>
                </div>
                <Link className='forgotPassword'>Forgot password?</Link>
                <div className='submitContainer'>
                    <button className='submit' onClick={() => {}}>
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
