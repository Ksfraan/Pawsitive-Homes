import AnimalList from '../components/AnimalList';
import TopDashboard from '../assets/TopDashboard.png';
import '../styles/DashboardPage.css';
import PropTypes from 'prop-types';

function DashboardPage({ animals }) {
    return (
        <div className='Dashboard'>
            <img src={TopDashboard} alt='List of animals' />
            <h3>Animals for adoption</h3>
            <AnimalList animals={animals} animalSpecies='All Species' />
        </div>
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
