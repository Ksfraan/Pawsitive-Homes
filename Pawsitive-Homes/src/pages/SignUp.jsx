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
    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>Create account</div>
                    <div className='underline'></div>
                </div>
                <div className='authenticator'>
                    <img src={googleIcon} alt='google icon' />
                    <img src={facebookIcon} alt='facebook icon' />
                    <img src={xIcon} alt='x icon' />
                    <img src={appleIcon} alt='apple icon' />
                </div>
                <div className='signOption'>
                    Use your best email for registration
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={userIcon} alt='user' />
                        <input type='text' placeholder='Name' />
                    </div>
                    <div className='input'>
                        <img src={emailIcon} alt='email' />
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input type='password' placeholder='Create password' />
                    </div>
                    <div className='input'>
                        <img src={passwordIcon} alt='password' />
                        <input type='password' placeholder='Confirm password' />
                    </div>
                </div>
                <div className='submitContainer'>
                    <button className='submit' onClick={() => {}}>
                        Sign Up
                    </button>
                </div>
                <div className='divider-wrapper'>
                    <div className='divider-container'>
                        <h5 className='divider'>Or</h5>
                    </div>
                </div>
                <div className='create-account-link'>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </PageContainer>
    );
}

export default SignUp;
