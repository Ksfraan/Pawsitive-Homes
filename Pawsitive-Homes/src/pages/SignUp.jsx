import PageContainer from '../components/PageContainer';
/* import react from '@vitejs/plugin-react-swc'; */
import '../styles/Signup.css';
import userIcon from '../assets/person.png';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/password.png';


function SignUp() {
    return (
        <PageContainer>
            <div className='container'>
                <div className='top'>
                    <div className='text'>Sign Up</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className="input">
                        <img src={userIcon} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="input">
                        <img src={emailIcon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="" />
                        <input type="password" placeholder='Choose password' />
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt="" />
                        <input type="password" placeholder='Confirm password' />
                    </div>
                </div> 
                <div className="forgotPassword">Forgot password?</div>   
                <div className="submitContainer">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Sign In</div>
                </div>           
            </div>
        </PageContainer>
    );
}

export default SignUp;
