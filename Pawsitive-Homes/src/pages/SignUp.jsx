import PageContainer from '../components/PageContainer';
import { useState } from 'react';
import '../styles/Signup.css';
import userIcon from '../assets/person.png';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';
import googleIcon from '../assets/google.png'
import facebookIcon from '../assets/facebook.png'
import xIcon from '../assets/x.png'
import appleIcon from '../assets/apple.png'

function SignUp() {

    const [action, setAction] = useState('Create account');

    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='authenticator'>
                    <img src={googleIcon} alt='google icon' />
                    <img src={facebookIcon} alt='facebook icon' />
                    <img src={xIcon} alt='x icon' />
                    <img src={appleIcon} alt='apple icon' />
                </div>
                <div className='inputs'>
                    {action === 'Welcome Back!' ? <div></div> : <div className="input">
                        <img src={userIcon} alt="user" />
                        <input type="text" placeholder='Name' />
                    </div>}                    
                    <div className="input">
                        <img src={emailIcon} alt="email" />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input type="password" 
                        placeholder={action === 'Welcome Back!' ? 'Password' : 'Create password'} />
                    </div>
                    {action === 'Welcome Back!' ? <div></div> : <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input type="password" placeholder='Confirm password' />
                    </div>}
                    
                </div> 
                {action === 'Create account' ? <div></div> : 
                <div className="forgotPassword">Forgot password?</div>}                   
                <div className="submitContainer">
                    <div className={action === 'Welcome Back!' ? 'submit gray' : 'submit'} 
                    onClick={() => {setAction('Create account')}}>Sign Up</div>
                    <div className={action === 'Create account' ? 'submit gray' : 'submit'} 
                    onClick={() => {setAction('Welcome Back!')}}>Login</div>
                </div>           
            </div>
        </PageContainer>
    );
}

export default SignUp;
