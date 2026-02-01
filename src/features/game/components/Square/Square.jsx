import PropTypes from 'prop-types';
import styles from './Square.module.css';

/**
 * Square Component
 * Represents a single cell in the Tic-Tac-Toe board
 * Accessible with ARIA labels for screen readers
 */
function Square({ value, onSquareClick, position, isDisabled }) {
  const ariaLabel = `Row ${position.row}, Column ${position.col}${value ? `, marked as ${value}` : ''}`;

  return (
    <button
      className={styles.square}
      onClick={onSquareClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      role="gridcell"
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]),
  onSquareClick: PropTypes.func.isRequired,
  position: PropTypes.shape({
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  }).isRequired,
  isDisabled: PropTypes.bool,
};

Square.defaultProps = {
  value: null,
  isDisabled: false,
};

export default Square;
