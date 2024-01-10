/* eslint-disable react/no-unescaped-entities */
import PageContainer from '../components/PageContainer';
import '../styles/AboutPage.css';
import Carina from '../assets/CarinaPhoto.jpeg';
import Miguel from '../assets/MiguelPhoto.jpeg';
import ButtonWithLink from '../components/ButtonWithLink';
import { useEffect } from 'react';

function AboutPage() {
    return (
        <PageContainer>
            <div className='about-page-wrapper'>
                <div className='about-pawsitive-homes'>
                    <h1>About Pawsitive Homes 🐾</h1>
                    <p>
                        Pawsitive Homes is an online, searchable database of
                        animals who need homes. <br />
                        <br /> At Pawsitive Homes, we believe that each animal
                        has a unique story and deserves a home filled with love
                        and care. We are more than just an animal adoption
                        application.
                        <br />
                        <br /> We are a refuge of hope and joy for our furry
                        friends. Our mission is to transform lives, one paw at a
                        time.
                        <br /> <br />
                        While browsing through our application, you're not just
                        searching for a new family best friend.
                        <br />
                        <br /> You're embarking on a journey filled with barks,
                        purrs, and unforgettable moments.
                    </p>
                    <div className='about-pawsitive-homes-images-wrapper'>
                        <img
                            className='cat-gif'
                            src='https://i.gifer.com/nVK.gif'
                            alt='gif of a cat wagging its paws'
                        />
                        <img
                            className='running-dog-gif'
                            src='https://i.gifer.com/nTw.gif'
                            alt='gif of a dog jumping'
                        />
                    </div>

                    <h3 className='moto'>
                        Be part of the change. Adopt. Love. Smile.
                    </h3>
                    <strong>
                        Pawsitively Yours, The Pawsitive Homes Team 🐾
                    </strong>
                    <br />
                </div>

                <div className='about-team'>
                    <h1>About our team</h1>
                    <div className='about-team-images-wrapper'>
                        <img src={Carina} alt='Picture of Carina' />
                        <img src={Miguel} alt='Picture of Miguel' />
                    </div>
                    <h4>Who are we?</h4>
                    <h5>Carina:</h5>
                    <p>
                        The expert in pajama meetings, master in the art of
                        communicating through emojis and gifs. A devotee of
                        thematic playlists for every code written. If something
                        goes wrong, it's because her coffee is still being
                        brewed.
                    </p>{' '}
                    <h5>Miguel:</h5>
                    <p>
                        The intrepid navigator of bits and bytes, turning
                        complex codes into digital masterpieces. With a secret
                        talent for picking the perfect soundtrack for any work
                        sprint, Miguel is the beacon of stability in our ocean
                        of online meetings.
                    </p>{' '}
                    <h4>What do we do?</h4>
                    <h5>Carina:</h5>{' '}
                    <p>
                        Specialist in solving bugs while balancing a cup of
                        coffee. If she can't solve a problem, it's because the
                        internet connection is slower than her morning thinking.
                    </p>{' '}
                    <h5>Miguel:</h5>{' '}
                    <p>
                        When not coding, Miguel is busy maintaining sanity with
                        a hot cup of tea and some virtual meditations. Our
                        virtual motto: Programming with coffee, laughing
                        heartily (even if it's through a laughing emoji).{' '}
                    </p>{' '}
                    <h4>Curiosities:</h4>
                    <h5>Carina:</h5>{' '}
                    <p>
                        Can recite the Wi-Fi password of any café in town but
                        forgets their own name during video conferences. Firmly
                        believes that the best part of remote work is being able
                        to wear slippers all day.
                    </p>{' '}
                    <h5>Miguel:</h5>{' '}
                    <p>
                        Can effortlessly navigate the intricate web of design
                        elements for our projects but might occasionally forget
                        where he left his favorite pen. Firmly believes that the
                        true essence of remote work lies in the freedom to
                        infuse creativity into every webpage, all while enjoying
                        the comfort of an ever-growing slipper collection.
                    </p>
                </div>
                <div className='back-home-button-container'>
                    <ButtonWithLink to='/'>Go Home</ButtonWithLink>
                </div>
            </div>
        </PageContainer>
    );
}

export default AboutPage;
