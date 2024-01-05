import logo from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
import '../styles/Header.css';
import ButtonWithLink from './ButtonWithLink';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ViewportSizeContext } from '../context/ViewportSizeContext';
import AccountLogo from '../assets/usericon.png';

function Header() {
    const { isMobile } = useContext(ViewportSizeContext);

    return (
        <div className='header'>
            {isMobile ? (
                <div className='account-logo-wrapper'>
                    <Link to={'/login'}>
                        <img
                            className='account-icon'
                            src={AccountLogo}
                            alt='Account Icon'
                        />
                    </Link>
                </div>
            ) : (
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
            )}
            <div className='logos-container'>
                <div className='letter-logo-container'>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt='Pawsitive Homes Logo'
                            className='organization-name'
                        />
                    </Link>
                </div>
                <div className='main-logo-container'>
                    <img src={MainLogo} alt='Main Logo' className='main-logo' />
                </div>
            </div>
        </div>
    );
}

export default Header;
