import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonWithLink = ({ to, children }) => (
    <Link to={to}>
        <Button
            variant='filled'
            color='#1e2761'
            size='lg'
            radius='md'
            className='home-Page-button'
        >
            {children}
        </Button>
    </Link>
);

ButtonWithLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default ButtonWithLink;
