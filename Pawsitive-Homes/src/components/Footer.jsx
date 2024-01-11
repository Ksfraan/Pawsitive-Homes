/* eslint-disable react/no-unescaped-entities */
import '../styles/Footer.css';
import { useState } from 'react';
import ArrowKeyEnter from '../assets/ArrowKeyEnter.png';
import { Link } from 'react-router-dom';
import facebookIcon from '../assets/facebookIcon.png';
import instagramIcon from '../assets/InstagramIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import snapchatIcon from '../assets/snapchatIcon.png';
import whatsAppIcon from '../assets/whatsAppIcon.png';
import youtubeIcon from '../assets/youtubeIcon.png';
import telegramIcon from '../assets/telegramIcon.png';

const Footer = () => {
    const [isButtonClicked, setButtonClicked] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const handleButtonClick = () => {
        setButtonClicked(true);
        setNameInput('');
        setEmailInput('');

        setTimeout(() => {
            setButtonClicked(false);
        }, 5000);
    };

    return (
        <div className='footer'>
            <div className='news-letter-subscription'>
                {isButtonClicked ? (
                    <p>Thank you for signing up!</p>
                ) : (
                    <p>Subscribe to receive all the news.</p>
                )}
            </div>
            <div className='wrapper'>
                <div className='inputs-button-wrapper'>
                    <input
                        type='text'
                        placeholder='First Name'
                        name='name'
                        autoComplete='false'
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        className='news-letter-input'
                    />

                    <div className='email-input-with-button'>
                        <input
                            type='text'
                            placeholder='Your Best Email'
                            name='emailAddress'
                            autoComplete='false'
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className='news-letter-input'
                        />
                        <button
                            className='submit-news-letter-button'
                            onClick={handleButtonClick}
                        >
                            <img
                                src={ArrowKeyEnter}
                                alt='Arrow key enter'
                                className='arrow-key-enter-image'
                            />
                        </button>
                    </div>
                </div>

                <div className='footer-lists-wrapper'>
                    <ul className='footer-lists'>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Careers</Link>
                        </li>
                        <li>
                            <Link>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link>Partnerships</Link>
                        </li>
                    </ul>{' '}
                </div>
            </div>
            <div>
                <ul className='footer-lists-icons'>
                    <li>
                        <Link to='https://www.facebook.com/'>
                            <img src={facebookIcon} alt='Facebook icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/'>
                            <img src={instagramIcon} alt='Instagram icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://twitter.com/'>
                            <img src={twitterIcon} alt='Twitter icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.snapchat.com/'>
                            <img src={snapchatIcon} alt='Snapchat icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://web.whatsapp.com/'>
                            <img src={whatsAppIcon} alt='WhatsApp icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/'>
                            <img src={youtubeIcon} alt='Youtube icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://web.telegram.org/'>
                            <img src={telegramIcon} alt='Telegram icon' />
                        </Link>
                    </li>
                </ul>{' '}
            </div>
            <p>
                <Link to='https://github.com/Ksfraan/Pawsitive-Homes'>
                    Visit our repository on Github
                </Link>
            </p>
        </div>
    );
};

export default Footer;
