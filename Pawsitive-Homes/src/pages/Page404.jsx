import Cat404 from '../assets/404.jpg';
import '../styles/Page404.css';
import PageContainer from '../components/PageContainer';
import ButtonWithLink from '../components/ButtonWithLink';

const Page404 = () => {
    return (
        <PageContainer>
            <div className='notFound'>
                <div className='img-wrapper'>
                    <img src={Cat404} alt='Not Found' />
                </div>
                <div className='text-wrapper'>
                    <p className='meowrror-text'>
                        404 Meowrror:
                        <br /> What in the whiskers brought you here?
                    </p>
                    <p>
                        This zone is a no-human territory! Meow-ve along, and
                        leave the coding to the cats.
                    </p>
                </div>
                <ButtonWithLink to={'/'}> Go to homepage</ButtonWithLink>
            </div>
        </PageContainer>
    );
};

export default Page404;
