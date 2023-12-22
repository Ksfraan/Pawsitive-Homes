import OrganizationName from '../assets/OrganizationName.png'
import MainLogo from '../assets/MainLogo.png'
import { Button } from '@mantine/core';
import '../styles/header.css'

function Header() {
    return ( 
        <div className='header'>
            <img src={OrganizationName} alt="Organization Name" />
            <img src={MainLogo} alt="Main Logo" />
            <div className='buttonContainer'>
                <Button variant="filled" color="#7A2048" size="lg" radius="md">Sign Up</Button>              
                <Button variant="filled" color="#7A2048" size="lg" radius="md">Log In</Button>
            </div>
        </div>
     );
}

export default Header;