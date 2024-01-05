import logo from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
import '../styles/Header.css';
import ButtonWithLink from './ButtonWithLink';

function Header() {
    return (
        <div className='header'>
            <div className='signUp-Login-buttons'>
                <ButtonWithLink to={'/signup'} colorOverride={'cadetBlue'}>
                    {' '}
                    Sign Up
                </ButtonWithLink>
                <ButtonWithLink to={'/login'} colorOverride={'cadetBlue'}>
                    {' '}
                    Log In
                </ButtonWithLink>
            </div>
            <div className='logos-container'>
                <div className='letter-logo-container'>
                    <img
                        src={logo}
                        alt='Pawsitive Homes Logo'
                        className='organization-name'
                    />
                </div>
                <div className='main-logo-container'>
                    <img src={MainLogo} alt='Main Logo' className='main-logo' />
                </div>
            </div>
        </div>
    );
}

export default Header;
