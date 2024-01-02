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
                <AnimalList animals={animals} animalSpecies='All Species' />
            </div>
        </PageContainer>
    );
}

DashboardPage.propTypes = {
    animals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            name: PropTypes.string,
            species: PropTypes.string,
            image: PropTypes.string,
        })
    ),
};

export default DashboardPage;
