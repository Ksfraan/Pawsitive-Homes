import OrganizationName from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
import '../styles/Header.css';
import ButtonWithLink from './ButtonWithLink';

function Header() {
    return (
        <div className='header'>
            <img
                src={OrganizationName}
                alt='Organization Name'
                className='organization-name'
            />
            <div className='main-logo-buttons'>
                <div className='signUp-Login-buttons'>
                    <ButtonWithLink to={'/signup'}> Sign Up</ButtonWithLink>
                    <ButtonWithLink to={'/login'}> Log In</ButtonWithLink>
                </div>

                <img src={MainLogo} alt='Main Logo' className='main-logo' />
            </div>
        </div>
    );
}

export default Header;
