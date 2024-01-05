import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const ButtonWithLink = ({ to, colorOverride, children }) => (
    <Link to={to}>
        <ButtonStyled colorOverride={colorOverride}>{children}</ButtonStyled>
    </Link>
);

ButtonWithLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
    ]),
    colorOverride: PropTypes.string,
};

export default ButtonWithLink;
