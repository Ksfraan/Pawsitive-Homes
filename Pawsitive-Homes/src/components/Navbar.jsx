import '../styles/Navbar.css';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

function Navbar() {
    const renderButtonLink = (to, children) => (
        <Button
            variant='filled'
            color='#1e2761'
            size='lg'
            radius='md'
            className='Home-Page-button'
        >
            <Link to={to}>{children}</Link>
        </Button>
    );
    return (
        <div className='navbar'>
            <div style={{ fontSize: '50px' }}>
                <div className='navbar-buttons'>
                    {renderButtonLink('/', 'Home Page')}
                    {renderButtonLink('/dogs', 'Dogs')}
                    {renderButtonLink('/cats', 'Cats')}
                    {renderButtonLink('/other-animals', 'Other Animals')}
                    {renderButtonLink('/add-animal', 'Add an animal')}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
