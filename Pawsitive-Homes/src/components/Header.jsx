import { Link } from 'react-router-dom';
import OrganizationName from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
import { Button } from '@mantine/core';
import '../styles/Header.css';

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
                    <Button
                        variant='filled'
                        color='#408ec6'
                        size='18'
                        radius='md'
                    >
                        <Link to='/signup'>Sign Up</Link>
                    </Button>
                    <Button
                        variant='filled'
                        color='#408ec6'
                        size='18'
                        radius='md'
                    >
                        <Link to='/login'>Log In</Link>
                    </Button>
                </div>

                <img src={MainLogo} alt='Main Logo' className='main-logo' />
            </div>
        </div>
    );
}

export default Header;
