import React from "react";
import classes from "./ContentPlaceholder.module.css";

function ContentPlaceholer(props) {
  return (
    <li
      className={`${classes.meal} ${classes[`animated-bg-text`]}  ${
        classes[`animated-bg`]
      }`}
    >
      <div className={classes.block}>
        <h3
          className={`${classes[`animated-bg-text`]}  ${
            classes[`animated-bg`]
          }`}
        >
          &nbsp;
        </h3>
        <div
          className={`${classes.description} ${classes[`animated-bg`]} ${
            classes[`animated-bg-text`]
          }`}
        >
          &nbsp;
        </div>
        <div
          className={`${classes.price} ${classes[`animated-bg`]} ${
            classes[`animated-bg-text`]
          }`}
        >
          &nbsp;
        </div>
      </div>
    </li>
  );
}

export default ContentPlaceholer;
