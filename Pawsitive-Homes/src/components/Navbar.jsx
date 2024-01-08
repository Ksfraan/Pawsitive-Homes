import '../styles/Navbar.css';
import ButtonWithLink from './ButtonWithLink';
import hamburguer from '../assets/hamburguer.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-buttons'>
                <ButtonWithLink to={'/'}> Home Page</ButtonWithLink>
                <ButtonWithLink to={'/dogs'}> Dogs</ButtonWithLink>
                <ButtonWithLink to={'/cats'}> Cats</ButtonWithLink>
                <ButtonWithLink to={'/other-animals'}>
                    Other Pets
                </ButtonWithLink>                
                {/* <ButtonWithLink to={'/about'}> About</ButtonWithLink> */}
                <img src={hamburguer} alt="search" />
            </div>
        </div>
    );
}

export default Navbar;
