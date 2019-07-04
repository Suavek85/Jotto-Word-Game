import React from "react";

export default () => {
 
    return (
      <div data-test="component-congrats">
        <span data-test="message-congrats">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  
};
/*
export default (props) => {
    if (props.success) {
      return (
        <div data-test="component-congrats">
          <span data-test="message-congrats">
            Congratulations! You guessed the word!
          </span>
        </div>
      );
    } else {
      return (<div data-test="component-congrats" ></div>);
    }
  };
  */