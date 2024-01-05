import PropTypes from 'prop-types';
import '../styles/ButtonStyled.css';

const ButtonStyled = ({ colorOverride, children }) => (
    <button
        className='button-styled'
        style={{ backgroundColor: colorOverride }}
    >
        {children}
    </button>
);

ButtonStyled.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
    ]),
    colorOverride: PropTypes.string,
};

export default ButtonStyled;
