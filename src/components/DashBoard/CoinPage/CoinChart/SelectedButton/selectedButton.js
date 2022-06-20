import PropTypes from 'prop-types';
import './selectedButtonStyles.scss';

function SelectButton({ children, onClick }) {
  return (
    <span onClick={onClick} className="selected-button">
      {children.toLowerCase()}
    </span>
  );
}

SelectButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SelectButton;
