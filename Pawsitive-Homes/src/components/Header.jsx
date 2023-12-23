import { Link } from 'react-router-dom';
import OrganizationName from '../assets/OrganizationName.png';
import MainLogo from '../assets/MainLogo.png';
import { Button } from '@mantine/core';
import '../styles/header.css';

function Header() {
    return (
        <div className='header'>
            <img src={OrganizationName} alt='Organization Name' />
            <img src={MainLogo} alt='Main Logo' />
            <div className='buttonContainer'>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='dogs-button'
                >
                    <Link to='/dogs'>Dogs</Link>
                </Button>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='cats-button'
                >
                    <Link to='/cats'>Cats</Link>
                </Button>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='OtherAnimals-button'
                >
                    <Link to='/other-animals'>Other Animals</Link>
                </Button>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='SignUp-button'
                >
                    <Link to='/signup'>Sign Up</Link>
                </Button>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='LogIn-button'
                >
                    <Link to='/login'>Log In</Link>
                </Button>
                <Button
                    variant='filled'
                    color='#7A2048'
                    size='lg'
                    radius='md'
                    className='dogs-button'
                >
                    <Link to='/'>Home Page</Link>
                </Button>
            </div>
        </div>
    );
}

export default Header;
