import AnimalList from './AnimalList';
import TopDashboard from '../assets/TopDashboard.png';
import '../styles/DashboardPage.css';
import PropTypes from 'prop-types';
import PageContainer from '../components/PageContainer';

function DashboardPage({ animals }) {
    return (
        <PageContainer>
            <div className='dashboard-page-wrapper'>
                <img
                    src={TopDashboard}
                    alt='image of a dog, a cat and a parrot'
                    className='dashboard-animals-images'
                />

                <center>
                    <h1>Animals for adoption</h1>
                </center>
                <AnimalList animals={animals} animalSpecies='All Species' />
            </div>
        </PageContainer>
    );
}

DashboardPage.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ),
};

export default DashboardPage;
