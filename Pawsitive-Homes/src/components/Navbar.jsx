import '../styles/Navbar.css';
import ButtonWithLink from './ButtonWithLink';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                <ButtonWithLink to={'/'} colorOverride={'transparent'}>
                    {' '}
                    Home Page
                </ButtonWithLink>
                <ButtonWithLink to={'/dogs'} colorOverride={'transparent'}>
                    {' '}
                    Dogs
                </ButtonWithLink>
                <ButtonWithLink to={'/cats'} colorOverride={'transparent'}>
                    {' '}
                    Cats
                </ButtonWithLink>
                <ButtonWithLink
                    to={'/other-animals'}
                    colorOverride={'transparent'}
                >
                    Other Pets
                </ButtonWithLink>
            </div>
        </div>
    );
}

export default Navbar;
