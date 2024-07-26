import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;