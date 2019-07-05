import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
 
    return (
      <div data-test="component-congrats">
        <span data-test="message-congrats">
          {props.success? 'Congratulations! You guessed the word!' : null }
        </span>
      </div>
    );
  
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats