import PropTypes from 'prop-types';
import '../styles/ButtonStyled.css';

const ButtonStyled = ({ colorOverride, onClick, children }) => (
    <button
        className='button-styled'
        style={{ backgroundColor: colorOverride }}
        onClick={onClick}
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
    onClick: PropTypes.func,
};

export default ButtonStyled;
