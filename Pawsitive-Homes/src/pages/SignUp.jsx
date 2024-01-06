import PageContainer from '../components/PageContainer';
import { useState } from 'react';
import '../styles/Signup.css';
import userIcon from '../assets/person.png';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';


function SignUp() {

    const [action, setAction] = useState('Create account');

    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className="input">
                        <img src={userIcon} alt="user" />
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="input">
                        <img src={emailIcon} alt="email" />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input type="password" placeholder='Create password' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="password" />
                        <input type="password" placeholder='Confirm password' />
                    </div>
                </div> 
                <div className="forgotPassword">Forgot password?</div>   
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
