import AnimalList from '../components/AnimalList';
import TopDashboard from '../assets/TopDashboard.png';
import '../styles/DashboardPage.css';

function DashboardPage() {
    return (
        <div className='Dashboard'>
            <img src={TopDashboard} alt="Animals" />
            <AnimalList />
        </div>
    );
}

export default DashboardPage;
