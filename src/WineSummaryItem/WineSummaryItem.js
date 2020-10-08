import React from "react";

const wineSummaryItem = (props) => {
return (
    <p onClick={props.clickHandler}>
      {props.year} {props.name}
    </p>
  );
};

export default wineSummaryItem;
