import PropTypes from 'prop-types';
import '../styles/PageContainer.css';

const PageContainer = ({ children }) => {
    return <div className='page-container'>{children}</div>;
};

PageContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PageContainer;
