import OrganizationName from '../assets/OrganizationName.png'
import MainLogo from '../assets/MainLogo.png'

function Header() {
    return ( 
        <div>
            <img src={OrganizationName} alt="Organization Name" />
            <img src={MainLogo} alt="Main Logo" />
            <div>
                <p>Sign Up</p>                
                <p>Log In</p>
            </div>
        </div>
     );
}

export default Header;