import logo from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
// import '../styles/Header.css';
import { Link } from 'react-router-dom';
import AccountLogo from '../assets/usericon.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='account-logo-wrapper'>
                <Link to={'/login'}>
                    <img
                        className='account-icon'
                        src={AccountLogo}
                        alt='Account Icon'
                    />
                </Link>
            </div>
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
};

export default Header;
