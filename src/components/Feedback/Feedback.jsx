import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  const optionsItems = Object.keys(options);
  return (
    <ul className={css.listBtn}>
      {optionsItems.map(optionsItem => (
        <li key={optionsItem}>
          <button
            className={css.btn}
            type="button"
            name={optionsItem}
            onClick={onLeaveFeedback}
          >
            {optionsItem}
          </button>
        </li>
      ))}
    </ul>
  );
};

Feedback.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Feedback;
