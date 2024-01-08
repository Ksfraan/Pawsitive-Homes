/* eslint-disable react/no-unescaped-entities */
import '../styles/Footer.css';
import ArrowKeyEnter from '../assets/ArrowKeyEnter.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='news-letter-subscription'>
                <label htmlFor='NewsletterTitle'>Be the first to know.</label>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='First Name'
                    name='name'
                    autoComplete='false'
                    className='news-letter-input'
                />
            </div>
            <div className='email-input-with-button'>
                <input
                    type='text'
                    placeholder='Your Best Email'
                    name='emailAddress'
                    autoComplete='false'
                    className='news-letter-input'
                />
                <button className='submit-news-letter-button'>
                    <img
                        src={ArrowKeyEnter}
                        alt='Arrow key enter'
                        className='arrow-key-enter-image'
                    />
                </button>
            </div>

            <a href='https://github.com/Ksfraan/Pawsitive-Homes'>
                Visit the repository on Github
            </a>
        </div>
    );
};

export default Footer;
