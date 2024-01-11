import AnimalList from './AnimalList';
import TopDashboard from '../assets/TopDashboard.png';
import PageContainer from '../components/PageContainer';
import '../styles/DashboardPage.css';

function DashboardPage() {
    return (
        <PageContainer>
            <div className='dashboard-page-wrapper'>
                <img
                    src={TopDashboard}
                    alt='image of a dog, a cat and a parrot'
                    className='dashboard-animals-images'
                />

                <AnimalList animalSpecies='All Species' />
            </div>
        </PageContainer>
    );
}

export default DashboardPage;
